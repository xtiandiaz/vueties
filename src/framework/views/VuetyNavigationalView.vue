<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { type VuetyNavigationBarVM } from '../components/bars/view-models'
import NavigationBar from '../components/bars/VuetyNavigationBar.vue'
import { useScrollSpanNormalized } from '../composables/scroll-span-normalized';

defineProps<{
  enablesBackOption: boolean
  enablesCloseOption: boolean
  
  navigationBarVM?: VuetyNavigationBarVM
  title?: string 
}>()

const emits = defineEmits<{
  close: [void]
  goBack: [void]
  goTo: [path: string]
}>()

const scrollSpan = useScrollSpanNormalized(
  useTemplateRef('view-wrapper'), 
  { min: 0, max: 28 }
).span
</script>

<template>
  <div class="vuety-navigational-view">
    <NavigationBar 
      v-if="navigationBarVM"
      :showsBackButton="enablesBackOption"
      :showsCloseButton="enablesCloseOption"
      :barShadeOpacity="scrollSpan"
      :title="title"
      :viewModel="navigationBarVM"
      @close="emits('close')"
      @goBack="emits('goBack')"
      @goTo="path => emits('goTo', path)"
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
