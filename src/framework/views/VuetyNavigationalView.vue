<script setup lang="ts" generic="NavItemKey">
import { useTemplateRef } from 'vue';
import NavigationBar from '../components/bars/VuetyNavigationBar.vue'
import { useScrollSpanNormalized } from '../composables/scroll-span-normalized';
import type { VuetyNavigationBarItem } from '../components/shared/view-models';

const { navBarItems } = defineProps<{
  navBarItems: VuetyNavigationBarItem<NavItemKey>[]
  
  backPath?: string
  closePath?: string
  title?: string
}>()

const emits = defineEmits<{
  back: [path: string]
  close: [path: string]
  push: [path: string]
}>()

const scrollSpan = useScrollSpanNormalized(
  useTemplateRef('view-wrapper'), 
  { min: 0, max: 28 }
).span
</script>

<template>
  <div class="vuety-navigational-view">
    <NavigationBar 
      v-if="navBarItems || title"
      :barItems="navBarItems"
      :backPath="backPath"
      :closePath="closePath"
      :barShadeOpacity="scrollSpan"
      :title="title"
      @back="path => emits('back', path)"
      @close="path => emits('close', path)"
      @push="path => emits('push', path)"
    />
    
    <div class="vnv-view-wrapper" ref="view-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use 'styles';
@use '../components/bars/styles' as bar-styles;

.vuety-navigation-bar {
  padding-top: env(safe-area-inset-top);
  @include vs.position(absolute, 0, 0, 0, 0);
}

.vuety-navigational-view {
  height: 100%;
}

.vnv-view-wrapper {
  box-sizing: border-box;
  overflow-y: auto;
  padding: calc(env(safe-area-inset-top) + bar-styles.$nav-bar-height) 0 env(safe-area-inset-bottom) 0;
  @include vs.position(absolute, 0, 0, 0, 0);
}
</style>
