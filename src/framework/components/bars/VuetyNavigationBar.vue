<script setup lang="ts">
import { type VuetyNavigationBarVM } from './view-models'
import { VuetyNavigationReturnMode } from '../../models/navigation'
import NavigationSubBar from './VuetyNavigationSubBar.vue';
import IconButton from '../buttons/VuetyIconButton.vue'
import CloseButton from '../buttons/VuetyCloseButton.vue';
import { Icon } from '@design-tokens/iconography';

defineProps<{
  vm: VuetyNavigationBarVM,
  barShadeOpacity?: number
}>()

const emits = defineEmits<{
  backButtonClicked: [void]
  closeButtonClicked: [void]
  routeSelected: [key: string]
}>()

function onRouteSelected(key: string) {
  emits('routeSelected', key)
}
</script>

<template>
  <nav v-if="vm.isVisible" class="navigation-bar">
    <div class="scroll-shade" :style="{ opacity: barShadeOpacity ?? 0 }"></div>
    
    <IconButton
      v-if="vm.returnMode === VuetyNavigationReturnMode.Back" 
      :icon="Icon.ChevronLeft"
      class="back"
      @click="emits('backButtonClicked')" 
    />
    
    <NavigationSubBar 
      v-if="vm.leftBarItems" 
      :itemVMs="vm.leftBarItems" 
      class="left"
      @route-selected="onRouteSelected" 
    />

    <span class="title" v-if="vm.title">{{ vm.title }}</span>

    <div class="spacer"></div>

    <CloseButton 
      v-if="vm.returnMode === VuetyNavigationReturnMode.Close" 
      @click="emits('closeButtonClicked')" 
    />
    
    <NavigationSubBar 
      v-if="vm.rightBarItems" 
      :itemVMs="vm.rightBarItems" 
      class="right"
      @route-selected="onRouteSelected" 
    />
  </nav>
</template>

<style scoped lang="scss">
@use 'styles';
@use '../../utils/styles' as utility-styles;
@use '@design-tokens/palette';
@use '@design-tokens/typography';

nav.navigation-bar {
  @extend .item-bar;
  height: styles.$nav-bar-height;
  padding: 0 styles.$nav-bar-h-padding;
  position: relative;

  :deep(.icon-button.back .svg-icon) {
    width: 1.5em;
    height: 1.5em;
  }

  .title {
    @extend .strong;
    left: 50%;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .tool-bar {
    &.left {
      justify-content: left;
    }

    &.right {
      justify-content: right;
    }
  }
  
  .scroll-shade {
    border-bottom: 1px solid;
    height: styles.$nav-bar-height;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    @include palette.color-attributes((
      'background-color': 'background',
      'border-color': 'tertiary-background'
    ));
  }
}
</style>
