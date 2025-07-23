<script setup lang="ts">
import ModalView from './VuetyModalView.vue'
import NavigationalView from './VuetyNavigationalView.vue';

defineProps<{
  title?: string
}>()

const emits = defineEmits<{
  close: [void]
  goBack: [void]
  goTo: [path: string]
}>()
</script>

<template>
  <ModalView
    @close="emits('close')"
  >
    <NavigationalView
      :enablesBackOption="false"
      :enablesCloseOption="true"
      :navigationBarVM="{}"
      :title="title"
      @close="emits('close')"
      @goBack="emits('goBack')"
      @goTo="(path: string) => emits('goTo', path)"
    >
      <slot></slot>
    </NavigationalView>
  </ModalView>
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
