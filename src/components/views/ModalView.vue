<script setup lang="ts" generic="RouteKey">
import { ref, onMounted, onBeforeUnmount, useTemplateRef } from 'vue';
import { clamp } from '@/assets/tungsten/math';
import NavigationBar from '../bars/NavigationBar.vue';
import { NavigationReturnMode } from '../view-models';

defineProps<{
  title?: string
}>()

const emits = defineEmits<{
  closeButtonClicked: [void]
}>()

const viewRef = useTemplateRef('view')
const scrollShadeThreshold = ref(56)
const barShadeOpacity = ref(0)

function onViewScrolled() {
  barShadeOpacity.value = clamp(viewRef.value!.scrollTop / scrollShadeThreshold.value, 0, 1)
}

onMounted(() => {
  scrollShadeThreshold.value = Number(getComputedStyle(viewRef.value!).getPropertyValue('--scroll-shade-threshold').replace('px', ''))
  viewRef.value?.addEventListener('scroll', onViewScrolled)
})
onBeforeUnmount(() => {
  viewRef.value?.removeEventListener('scroll', onViewScrolled)
})
</script>

<template>
  <div class="modal-view">
    
    <div class="background" @click="emits('closeButtonClicked')"></div>
    
    <div class="view-wrapper">
      <!-- <span id="drag-indicator"></span> -->
      <NavigationBar 
        :vm="{ isVisible: true, returnMode: NavigationReturnMode.Close }"
        :barShadeOpacity='barShadeOpacity'
        :title="title"
        @close-button-clicked="emits('closeButtonClicked')"
      />
      <div class="view" ref='view'>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/views' with (
  $modal-view-max-width: 720px
);
@use '../styles/utils';
@use '../styles/bars';
@use '@design-tokens/palette';

div.modal-view {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1000;
  
  .background {
    @extend .absolute-background;
    
    background-color: rgba($color: #000000, $alpha: 0.8);
  }
  
  .view-wrapper {
    $border-radius: 1em;
    $view-margin-top: 1.5em;
    
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
    height: 100%;
    margin: $view-margin-top auto 0 auto;
    max-width: views.$modal-view-max-width;
    overflow: hidden;
    padding: bars.$nav-bar-height 0;
    position: relative;
    
    @include palette.color-attribute('background-color', 'secondary-background');
    
    .view {
      @extend .scroll-shade-target;
      height: calc(100% - bars.$nav-bar-height - $view-margin-top - env(safe-area-inset-bottom));
      overflow-y: auto;
    }
    
    // #drag-indicator {
    //   border-radius: 2px;
    //   display: block;
    //   height: $drag-indicator-height;
    //   left: 50%;
    //   position: absolute;
    //   top: $drag-indicator-top-margin;
    //   transform: translate(-50%, -50%);
    //   width: 40px;
    //   @include palette.color-attribute('background-color', 'body', 0.5);
    // }
  }
}
</style>
