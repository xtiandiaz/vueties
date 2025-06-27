<script setup lang="ts">
import { watch } from 'vue';
import ModalNavigationalView from './VuetyModalNavigationalView.vue';
import statusStore, { VuetyFocusInputTargetKey, VuetyTransitionState } from '../stores/status'

const status = statusStore()

watch(() => status.modalTransitionState, (state) => {
  switch (state) {
    case VuetyTransitionState.Entered:
      status.focusInputTarget = VuetyFocusInputTargetKey.SearchInput
      break
  }
})
</script>

<template>
  <ModalNavigationalView>
    <slot></slot>
  </ModalNavigationalView>
</template>

<style scoped lang="scss">
@use 'styles';
@use '../components/form/styles' as form-styles;
@use '../components/bars/styles' as bar-styles;
@use '@design-tokens/palette';

:deep(.vuety-navigation-bar) {
  height: bar-styles.$search-bar-height;
}

:deep(.vhv-view) {
  height: calc(100% - bar-styles.$search-bar-height);
  @include styles.scroll-shade-threshold(bar-styles.$search-bar-height);
}

:deep(.vsv-input-section) {
  left: form-styles.$form-padding;
  position: absolute;
  right: 4em;
  top: calc(form-styles.$form-padding - 1px);
  z-index: calc(bar-styles.$nav-bar-z-index + 1);
  
  .rows {
    border: 1px solid;
    @include palette.color-attribute('border-color', 'tertiary-background');
  }
} 

:deep(.vmv-view-wrapper) {
  padding-top: bar-styles.$search-bar-height;
}
</style>
