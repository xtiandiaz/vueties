<script setup lang="ts">
import { type VuetyNavigationBarVM } from '../components/bars/view-models'
import NavigationBar from '../components/bars/VuetyNavigationBar.vue'
import HeadedView from './VuetyHeadedView.vue';

defineProps<{
  navigationBarVM: VuetyNavigationBarVM,
  title?: string 
}>()
</script>

<template>
  <HeadedView>
    <template #head="{ headShadeOpacity }">
      <NavigationBar 
        :barShadeOpacity="headShadeOpacity"
        :title="title"
        :viewModel="navigationBarVM" 
      />
    </template>
    
    <template #view>
      <slot></slot>
    </template>
  </HeadedView>
</template>

<style scoped lang="scss">
@use 'styles';
@use '../components/bars/styles' as bar-styles;

:deep(.vhv-view) {
  height: calc(100% - bar-styles.$nav-bar-height);
  @include styles.scroll-shade-threshold(bar-styles.$nav-bar-height);
}
</style>
