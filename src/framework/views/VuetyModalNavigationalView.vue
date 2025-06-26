<script setup lang="ts" generic="RouteKey">
import { VuetyNavigationReturnMode } from '../components/bars/view-models'
import ModalView from './VuetyModalView.vue';
import NavigationalView from './VuetyNavigationalView.vue'

defineProps<{
  title?: string
}>()
</script>

<template>
  <ModalView>
    <NavigationalView
      :navigationBarVM="{ isVisible: true, returnMode: VuetyNavigationReturnMode.Close }"
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
