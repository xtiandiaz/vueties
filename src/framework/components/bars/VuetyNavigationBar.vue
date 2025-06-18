<script setup lang="ts">
import { useRouter } from 'vue-router';
import { VuetyNavigationReturnMode } from '../../models/navigation'
import { type VuetyNavigationBarVM } from './view-models'
import NavigationSubBar from './VuetyNavigationSubBar.vue';
import IconButton from '../buttons/VuetyIconButton.vue'
import CloseButton from '../buttons/VuetyCloseButton.vue';
import { Icon } from '@design-tokens/iconography';

defineProps<{
  viewModel: VuetyNavigationBarVM,
  barShadeOpacity?: number
}>()

const router = useRouter()
</script>

<template>
  <nav v-if="viewModel.isVisible" class="navigation-bar">
    <div class="scroll-shade" :style="{ opacity: barShadeOpacity ?? 0 }"></div>
    
    <IconButton
      v-if="viewModel.returnMode === VuetyNavigationReturnMode.Back" 
      :icon="Icon.ChevronLeft"
      class="back"
      @click="router.back()" 
    />
    
    <NavigationSubBar 
      v-if="viewModel.leftBarItems" 
      :itemVMs="viewModel.leftBarItems" 
      class="left"
    />

    <span class="title" v-if="viewModel.title">{{ viewModel.title }}</span>

    <div class="spacer"></div>

    <CloseButton 
      v-if="viewModel.returnMode === VuetyNavigationReturnMode.Close" 
      @click="router.back()" 
    />
    
    <NavigationSubBar 
      v-if="viewModel.rightBarItems" 
      :itemVMs="viewModel.rightBarItems" 
      class="right"
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
