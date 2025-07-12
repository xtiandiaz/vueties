<script setup lang="ts" generic="RouteKey">
import { useRouter } from 'vue-router'

defineProps<{
  title?: string
}>()

const router = useRouter()
</script>

<template>
  <div class="vuety-modal-view">
    <div class="vmv-background" @click="router.back()"></div>
    
    <div class="vmv-view-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'styles' with (
  $modal-view-max-width: 720px
);
@use '../components/bars/styles' as bar-styles;
@use '../styles/mixins';
@use '@design-tokens/palette';

.vuety-modal-view {
  padding-top: calc(styles.$modal-view-margin-top + env(safe-area-inset-top));
  z-index: 1000;
  @include mixins.position(fixed, 0, 0, 0, 0);
  
  :deep(.vuety-navigation-bar) {
    padding-top: 0;
  }
  
  .vmv-background {
    background-color: rgba($color: #000000, $alpha: 0.8);
    z-index: -1000;
    @include mixins.position(absolute, 0, 0, 0, 0);
  }
  
  .vmv-view-wrapper {
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    border-radius: styles.$modal-view-border-radius styles.$modal-view-border-radius 0 0;
    max-width: styles.$modal-view-max-width;
    @include palette.color-attribute('background-color', 'secondary-background');
  }
}
</style>
