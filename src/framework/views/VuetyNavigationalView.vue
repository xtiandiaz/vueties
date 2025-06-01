<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, useTemplateRef } from 'vue';
import { type VuetyNavigationBarVM } from '../components/bars/view-models'
import NavigationBar from '../components/bars/VuetyNavigationBar.vue'
import { clamp } from '@/assets/tungsten/math';

defineProps<{
  navigationBarVM: VuetyNavigationBarVM
}>()

const emits = defineEmits<{
  backButtonClicked: [void]
  closeButtonClicked: [void]
  routeSelected: [key: string]
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
  <div class="navigational-view-wrapper">
    
    <NavigationBar 
      :vm="navigationBarVM" 
      :barShadeOpacity="barShadeOpacity" 
      @back-button-clicked="emits('backButtonClicked')"
      @close-button-clicked="emits('closeButtonClicked')"
      @route-selected="key => emits('routeSelected', key)"
    />
    
    <div class="view" ref='view'>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'styles';
@use '../components/bars/styles' as bar-styles;
@use '../utils/styles' as utility-styles;
@use '@design-tokens/palette';

.navigational-view-wrapper {  
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  padding-top: bar-styles.$nav-bar-height;
  position: relative;
  @include palette.color-attribute('background-color', 'secondary-background');
  
  .navigation-bar {
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1000;
  }
  
  .view {
    @extend .nav-bar-scroll-shade-target;
    height: calc(100% - bar-styles.$nav-bar-height);
    overflow-y: auto;
  }
}
</style>
