<script setup lang="ts" generic="NavigationTarget">
import { modalViewNavigationBarItems } from '../view-models';
import NavigationBar from '../bars/NavigationBar.vue';

defineProps<{
  title?: string,
  customTargetSelectedAction?: (target: NavigationTarget) => void,
  customCloseButtonAction?: () => void
}>()

</script>

<template>
  <div class="modal-view">
    <div class="background"></div>
    <div class="view-wrapper">
      <!-- <span id="drag-indicator"></span> -->
      <NavigationBar 
        :vm="modalViewNavigationBarItems<NavigationTarget>([], title)"
        :custom-target-selected-action="customTargetSelectedAction"
        :custom-close-button-action="customCloseButtonAction"
      />
      <div class="view">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/views' with (
  $modal-view-max-width: 720px
);
@use '../styles/utils';
@use '../styles/bars';
@use '@design-tokens/palette';

.modal-view {
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
    $border-radius: 1.25em;
    $view-margin-top: 2em;
      
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: $view-margin-top;
    max-width: views.$modal-view-max-width;
    overflow: hidden;
    padding: bars.$nav-bar-height 0;
    position: relative;
    
    nav, & {
      @include palette.color-attribute('background-color', 'secondary-background');
    }
    
    .view {
      height: calc(100% - bars.$nav-bar-height - $view-margin-top - env(safe-area-inset-bottom));
      position: relative;
      overflow-y: auto;
    }
    
    // #drag-indicator {
    //   border-radius: 2px;
    //   display: block;
    //   height: $drag-indicator-height;
    //   left: 50%;
    //   position: absolute;
    //   top: $drag-indicator-top-margin;
    //   transform: translate(-50%, -50%);
    //   width: 40px;
    //   @include palette.color-attribute('background-color', 'body', 0.5);
    // }
  }
}
</style>
