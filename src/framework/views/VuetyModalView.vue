<script setup lang="ts" generic="RouteKey">
import { useRouter } from 'vue-router'
import { VuetyNavigationReturnMode } from '../models/navigation';
import NavigationalView from './VuetyNavigationalView.vue'

defineProps<{
  title?: string
}>()

const router = useRouter()
</script>

<template>
  <div class="modal-view">
    
    <div class="modal-background" @click="router.back()"></div>
    
    <NavigationalView
      :navigationBarVM="{ isVisible: true, title: title, returnMode: VuetyNavigationReturnMode.Close }"
    >
      <slot></slot>
    </NavigationalView>
  </div>
</template>

<style scoped lang="scss">
@use 'styles' with (
  $modal-view-max-width: 720px
);
@use '../components/bars/styles' as bar-styles;
@use '../utils/styles' as utility-styles;

div.modal-view {
  bottom: 0;
  left: 0;
  padding-top: styles.$modal-view-margin-top;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
  
  .modal-background {
    background-color: rgba($color: #000000, $alpha: 0.8);
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1000;
  }
  
  .navigational-view-wrapper {
    $border-radius: 1em;
    
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
    max-width: styles.$modal-view-max-width;
  }
}
</style>
