<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, useTemplateRef } from 'vue';
import { clamp } from '@/assets/tungsten/math';

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
  <div class="navigational-view-wrapper">
    
    <div class="scroll-shade" :style="{ opacity: barShadeOpacity ?? 0 }"></div>
    <slot name="bar"></slot>
    
    <div class="view" ref='view'>
      <slot name="view"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/bars';
@use '../styles/utils';
@use '@design-tokens/palette';

.navigational-view-wrapper {  
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  @include palette.color-attribute('background-color', 'secondary-background');
  
  .view {
    $padding-bottom: env(safe-area-inset-bottom);
    
    @extend .nav-bar-scroll-shade-target;
    height: calc(100% - bars.$nav-bar-height - $padding-bottom);
    overflow-y: auto;
    padding-bottom: $padding-bottom;
  }
  
  .scroll-shade {
    border-bottom: 1px solid;
    height: bars.$nav-bar-height;
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
