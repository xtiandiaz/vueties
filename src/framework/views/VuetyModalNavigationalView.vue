<script setup lang="ts">

defineProps<{
  title?: string
}>()
</script>

<template>
  <ModalView>
    <NavigationalView
      :navigationBarVM="{}"
      :title="title"
    >
      <slot></slot>
  </NavigationalView>
  </ModalView>
</template>

<style scoped lang="scss">
@use '../components/bars/styles' as bar-styles;

:deep(.vmv-view-wrapper) {
  padding-top: bar-styles.$nav-bar-height;
}
</style>
