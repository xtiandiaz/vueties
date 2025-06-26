<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, useTemplateRef } from 'vue';
import { clamp } from '@/assets/tungsten/math';

const viewRef = useTemplateRef('view')
const scrollShadeThreshold = ref(56)
const headShadeOpacity = ref(0)

function onViewScrolled() {
  headShadeOpacity.value = clamp(viewRef.value!.scrollTop / scrollShadeThreshold.value, 0, 1)
}

onMounted(() => {
  scrollShadeThreshold.value = Number(
    getComputedStyle(viewRef.value!)
      .getPropertyValue('--scroll-shade-threshold')
      .replace('px', '')
  )
  viewRef.value?.addEventListener('scroll', onViewScrolled)
})

onBeforeUnmount(() => {
  viewRef.value?.removeEventListener('scroll', onViewScrolled)
})
</script>

<template>
  <div class="vuety-headed-view">
    <div class="vhv-head">
      <slot name="head" :headShadeOpacity="headShadeOpacity"></slot>
    </div>
    
    <div class="vhv-view" ref="view">
      <slot name="view"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'styles';
@use '../components/bars/styles' as bar-styles;
@use '../utils/styles' as utility-styles;
@use '@design-tokens/palette';

.vuety-headed-view {  
  height: 100%;
    
  .vhv-head {
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .vhv-view {
    overflow-y: auto;
    z-index: calc(bar-styles.$nav-bar-z-index - 1);
  }
}
</style>
