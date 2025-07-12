<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { VuetyNavigationReturnMode, type VuetyNavigationBarVM } from './view-models'
import NavigationSubBar from './VuetyNavigationSubBar.vue';
import IconButton from '../buttons/VuetyIconButton.vue'
import CloseButton from '../buttons/VuetyCloseButton.vue';
import { Icon } from '@design-tokens/iconography';
import '@/assets/tungsten/extensions/array.extensions'

const { viewModel } = defineProps<{
  viewModel: VuetyNavigationBarVM,
  barShadeOpacity?: number
  title?: string
}>()

const router = useRouter()
const route = useRoute()

const showsBackButton = computed(() => route.path !== '/' && viewModel.returnMode !== VuetyNavigationReturnMode.Close)
</script>

<template>
  <nav v-if="viewModel.isVisible" class="vuety-navigation-bar">
    <div class="vuety-scroll-shade" :style="{ opacity: barShadeOpacity ?? 0 }"></div>
    
    <div class="content-wrapper">
      <IconButton
        v-if="showsBackButton"
        class="back"
        :icon="Icon.ChevronLeft"
        @click="router.back()"
      />
      
      <NavigationSubBar 
        v-if="viewModel.leftBarItems && !showsBackButton" 
        class="left"
        :itemVMs="viewModel.leftBarItems" 
      />

      <span 
        v-if="title"
        id="vnb-title"
        class="title"
        :style="{ opacity: route.meta.showsLargeTitle.value ? barShadeOpacity ?? 0 : 1 }"
      >
        {{ title }}
      </span>

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
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use 'styles';
@use '@design-tokens/palette';
@use '@design-tokens/typography';

.vuety-navigation-bar {
  height: styles.$nav-bar-height;
  position: relative;
  z-index: styles.$nav-bar-z-index;
  
  .content-wrapper {
    height: 100%;
    padding: 0 styles.$nav-bar-h-padding;
    position: relative;
    @extend .item-bar;
    
    :deep(.vuety-icon-button.back .svg-icon) {
      width: 1.75em;
      height: 1.75em;
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
}

.vuety-scroll-shade {
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
</style>
