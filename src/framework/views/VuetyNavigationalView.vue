<script setup lang="ts" generic="NavItemKey">
import { onMounted, useTemplateRef } from 'vue';
import { VuetyNavigationBarItemKind, type VuetyNavigationBarItem } from '../components/shared/view-models';
import { useScrollSpanNormalized } from '../composables/scroll-span-normalized';
import VuetyNavigationBar from '../components/bars/VuetyNavigationBar.vue';

const { navBarItems } = defineProps<{
  navBarItems: VuetyNavigationBarItem[],
  title?: string
}>()

const emits = defineEmits<{
  back: [void]
  close: [void]
  push: [path: string]
  setClosePath: [path?: string]
}>()

const scrollSpan = useScrollSpanNormalized(
  useTemplateRef('view-wrapper'), 
  { min: 0, max: 28 }
).span

onMounted(() => {
  emits('setClosePath', navBarItems.find(it => it.kind === VuetyNavigationBarItemKind.close)?.path)
})
</script>

<template>
  <div class="vuety-navigational-view">
    <VuetyNavigationBar 
      :bar-items="navBarItems" 
      :bar-shade-opacity="scrollSpan"
      :title="title"
      @back="emits('back')"
      @close="emits('close')"
      @push="(path: string) => emits('push', path)"
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
}

.vnv-view-wrapper {
  box-sizing: border-box;
  flex-grow: 1;
  overflow-y: auto;
}
</style>
