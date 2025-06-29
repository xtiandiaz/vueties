<script setup lang="ts">
import { type VuetyNavigationBarVM } from '../components/bars/view-models'
import VuetyNavigationBar from '../components/bars/VuetyNavigationBar.vue'

defineProps<{
  navigationBarVM?: VuetyNavigationBarVM
}>()
</script>

<template>
  <VuetyNavigationBar v-if="navigationBarVM" :viewModel="navigationBarVM" />
  
  <RouterView />
</template>
