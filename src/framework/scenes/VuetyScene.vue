<script setup lang="ts">
import { type VuetyNavigationBarVM } from '../components/bars/view-models'
import VuetyNavigationBar from '../components/bars/VuetyNavigationBar.vue'

defineProps<{
  navigationBarVM?: VuetyNavigationBarVM
}>()
</script>

<template>
  <VuetyNavigationBar v-if="navigationBarVM" :viewModel="navigationBarVM" />
  
  <RouterView id="router-view" />
</template>

<style scoped lang="scss">
@use '@vueties/components/bars/styles' as bar-styles;

#router-view {
  height: calc(100% - bar-styles.$nav-bar-height);
  overflow: auto;
}
</style>
