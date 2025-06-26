<script setup lang="ts">
import { useRouter } from 'vue-router';
import { VuetyNavigationReturnMode, type VuetyNavigationBarVM } from './view-models'
import NavigationSubBar from './VuetyNavigationSubBar.vue';
import IconButton from '../buttons/VuetyIconButton.vue'
import CloseButton from '../buttons/VuetyCloseButton.vue';
import { Icon } from '@design-tokens/iconography';

defineProps<{
  viewModel: VuetyNavigationBarVM,
  barShadeOpacity?: number
  title?: string
}>()

const router = useRouter()
</script>

<template>
  <nav v-if="viewModel.isVisible" class="vuety-navigation-bar">
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

    <span class="title" v-if="title">{{ title }}</span>

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

.vuety-navigation-bar {
  @extend .item-bar;
  height: styles.$nav-bar-height;
  padding: 0 styles.$nav-bar-h-padding;
  position: relative;
  z-index: styles.$nav-bar-z-index;

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

  .vuety-toolbar {
    &.left {
      justify-content: left;
    }

    &.right {
      justify-content: right;
    }
  }
}
</style>
