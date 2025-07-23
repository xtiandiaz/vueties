<script setup lang="ts">
import type { VuetyNavigationBarVM } from './view-models'
import NavigationSubBar from './VuetyNavigationSubBar.vue';
import IconButton from '../buttons/VuetyIconButton.vue'
import CloseButton from '../buttons/VuetyCloseButton.vue';
import { Icon } from '@design-tokens/iconography';
import '@/assets/tungsten/extensions/array.extensions'

const { viewModel } = defineProps<{
  showsBackButton: boolean
  showsCloseButton: boolean
  viewModel: VuetyNavigationBarVM
  
  barShadeOpacity?: number
  title?: string
}>()

const emits = defineEmits<{
  close: [void]
  goBack: [void]
  goTo: [path: string]
}>()

</script>

<template>
  <nav v-if="viewModel.isVisible ?? true" class="vuety-navigation-bar">
    <div class="vuety-scroll-shade" :style="{ opacity: barShadeOpacity ?? 0 }"></div>
    
    <div class="content-wrapper">
      <IconButton
        v-if="showsBackButton"
        class="back"
        :icon="Icon.ChevronLeft"
        @click="emits('goBack')"
      />
      
      <NavigationSubBar 
        v-if="viewModel.leftBarItems && !showsBackButton" 
        class="left"
        :itemVMs="viewModel.leftBarItems" 
        @goTo="(path: string) => emits('goTo', path)"
      />

      <span 
        v-if="title"
        id="vnb-title"
        class="title"
        :style="{ opacity: $route.meta._showsLargeTitle?.value ? (barShadeOpacity ?? 0) : 1 }"
      >
        {{ title }}
      </span>

      <div class="spacer"></div>

      <CloseButton 
        v-if="showsCloseButton"
        @click="emits('close')"
      />
      
      <NavigationSubBar 
        v-if="viewModel.rightBarItems" 
        class="right"
        :itemVMs="viewModel.rightBarItems" 
        @goTo="(path: string) => emits('goTo', path)"
      />
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use 'styles';
@use '../../styles/mixins';
@use '@design-tokens/palette';
@use '@design-tokens/typography';

.vuety-navigation-bar {
  height: styles.$nav-bar-height;
  position: relative;
  z-index: styles.$nav-bar-z-index;
  
  .content-wrapper {
    @extend .item-bar;
    gap: 0;
    height: 100%;
    padding: 0 styles.$nav-bar-h-padding;
    position: relative;
    
    :deep(.vuety-icon-button.back .svg-icon) {
      width: 1.75em;
      height: 1.75em;
    }

    .title {
      @extend .strong;
      display: inline-block;
      left: 50%;
      pointer-events: none;
      position: absolute;
      text-align: center;
      top: 50%;
      transform: translate(-50%, -50%);
      white-space: nowrap;
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
}

.vuety-scroll-shade {
  border-bottom: 1px solid;
  @include mixins.position(absolute, 0, 0, 0, 0);
  @include palette.color-attributes((
    'background-color': 'background',
    'border-color': 'tertiary-background'
  ));
}
</style>
