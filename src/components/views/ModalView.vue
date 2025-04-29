<script setup lang="ts" generic="RouteKey">
import NavigationBar from '../bars/NavigationBar.vue';
import { NavigationReturnMode } from '../view-models';
import NavigationalView from './NavigationalView.vue'

defineProps<{
  title?: string
}>()

const emits = defineEmits<{
  closeButtonClicked: [void]
}>()
</script>

<template>
  <div class="modal-view">
    
    <div class="background" @click="emits('closeButtonClicked')"></div>
    
    <NavigationalView>
      <template v-slot:bar>
        <NavigationBar 
          :vm="{ isVisible: true, returnMode: NavigationReturnMode.Close }"
          :title="title"
          @close-button-clicked="emits('closeButtonClicked')"
        />  
      </template>
      <template v-slot:view>
        <slot></slot>
      </template>
    </NavigationalView>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/views' with (
  $modal-view-max-width: 720px
);
@use '../styles/utils';

div.modal-view {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1000;
  
  .background {
    @extend .absolute-background;
    background-color: rgba($color: #000000, $alpha: 0.8);
  }
  
  .view-wrapper {
    $border-radius: 1em;
    
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
    max-width: views.$modal-view-max-width;
  }
}
</style>
