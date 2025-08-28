<script setup lang="ts" generic="NavItemKey">
import { useTemplateRef } from 'vue';
import type { VuetyNavigationBarItem } from '../components/shared/view-models';
import { useScrollSpanNormalized } from '../composables/scroll-span-normalized';
import VuetyNavigationBar from '../components/bars/VuetyNavigationBar.vue';

defineProps<{
  navBarItems: VuetyNavigationBarItem[],
  title?: string
}>()

const scrollSpan = useScrollSpanNormalized(
  useTemplateRef('view-wrapper'), 
  { min: 0, max: 28 }
).span
</script>

<template>
  <div class="vuety-navigational-view">
    <VuetyNavigationBar 
      :bar-items="navBarItems" 
      :bar-shade-opacity="scrollSpan"
      :title="title"
    />
    
    <div class="vnv-view-wrapper" ref="view-wrapper">
      <slot class="vnv-view"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use 'styles';
@use '../components/bars/styles' as bar-styles;

.vuety-navigational-view {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: env(safe-area-inset-top);
}

.vnv-view-wrapper {
  box-sizing: border-box;
  overflow-y: auto;
  padding-bottom: env(safe-area-inset-bottom);
  flex-grow: 1;
}
</style>
