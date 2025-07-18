<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, useTemplateRef } from 'vue';
import { type VuetyNavigationBarVM } from '../components/bars/view-models'
import NavigationBar from '../components/bars/VuetyNavigationBar.vue'
import { clamp } from '@/assets/tungsten/math';

defineProps<{
  navigationBarVM?: VuetyNavigationBarVM,
  title?: string 
}>()

const viewRef = useTemplateRef('view-wrapper')
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
  <div class="vuety-navigational-view">
    <NavigationBar 
      v-if="navigationBarVM"
      :barShadeOpacity="headShadeOpacity"
      :title="title"
      :viewModel="navigationBarVM" 
    />
    
    <div class="vnv-view-wrapper" ref="view-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'styles';
@use '@vueties/styles/mixins';
@use '../components/bars/styles' as bar-styles;

.vuety-navigation-bar {
  padding-top: env(safe-area-inset-top);
  @include mixins.position(absolute, 0, 0, 0, 0);
}

.vuety-navigational-view {
  height: 100%;
}

.vnv-view-wrapper {
  box-sizing: border-box;
  overflow-y: auto;
  padding-bottom: env(safe-area-inset-bottom);
  @include mixins.position(absolute, calc(env(safe-area-inset-top) + bar-styles.$nav-bar-height), 0, 0, 0);
  @include styles.scroll-shade-threshold(bar-styles.$nav-bar-height);
}
</style>
