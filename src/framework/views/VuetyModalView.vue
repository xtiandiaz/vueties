<script setup lang="ts">
defineProps<{
  title?: string
}>()

const emits = defineEmits<{
  close: [void]
}>()
</script>

<template>
  <div class="vuety-modal-view">
    <div class="vmv-background" @click="emits('close')"></div>
    
    <div class="vmv-view-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use 'styles' with (
  $modal-view-max-width: 720px
);
@use '../components/bars/styles' as bar-styles;

.vuety-modal-view {
  padding-top: calc(styles.$modal-view-margin-top + env(safe-area-inset-top));
  z-index: styles.$modal-view-z-index;
  @include vs.position(fixed, 0, 0, 0, 0);
  
  :deep(.vuety-navigation-bar) {
    padding-top: 0;
  }
  
  .vmv-background {
    background-color: rgba($color: #000000, $alpha: 0.8);
    z-index: -1000;
    @include vs.position(fixed, 0, 0, 0, 0);
  }
  
  .vmv-view-wrapper {
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    border-radius: styles.$modal-view-border-radius styles.$modal-view-border-radius 0 0;
    max-width: styles.$modal-view-max-width;
    @include vs.color-attribute('background-color', vs.$secondary-background-color);
  }
}
</style>
