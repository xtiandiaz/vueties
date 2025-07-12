<script setup lang="ts" generic="RouteKey">
import { VuetyNavigationReturnMode } from '../components/bars/view-models'


defineProps<{
  title?: string
}>()
</script>

<template>
  
</template>

<style scoped lang="scss">
@use '../components/bars/styles' as bar-styles;

:deep(.vmv-view-wrapper) {
  padding-top: bar-styles.$nav-bar-height;
}
</style>
