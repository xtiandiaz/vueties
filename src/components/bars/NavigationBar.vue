<script setup lang="ts">
import { type NavigationBarVM, NavigationReturnMode } from '../view-models'
import { Icon } from '@design-tokens/iconography';
import NavigationSubBar from './NavigationSubBar.vue';
import IconButton from '../buttons/IconButton.vue'
import CloseButton from '../buttons/CloseButton.vue';

defineProps<{
  vm: NavigationBarVM
  barShadeOpacity?: number
  title?: string
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
  <nav>
    <div class="scroll-shade" :style="{ opacity: barShadeOpacity ?? 0 }"></div>
    
    <IconButton 
      v-if="vm.returnMode === NavigationReturnMode.Back" 
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

    <span class="title" v-if="title">{{ title }}</span>

    <div class="spacer"></div>

    <CloseButton 
      v-if="vm.returnMode === NavigationReturnMode.Close" 
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
@use '../styles/bars';
@use '../styles/utils';
@use '@design-tokens/palette';
@use '@design-tokens/typography';

nav {
  @extend .item-bar;
  height: bars.$nav-bar-height;
  left: 0;
  padding: 0 bars.$nav-bar-h-padding;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1000;
  @include palette.color-attribute('background-color', 'secondary-background');

  :deep(.icon-button.back .svg-icon) {
    width: 1.5em;
    height: 1.5em;
  }
  
  .scroll-shade {
    border-bottom: 1px solid;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    @include palette.color-attributes((
      'background-color': 'background',
      'border-color': 'tertiary-background'
    ));
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
}
</style>
