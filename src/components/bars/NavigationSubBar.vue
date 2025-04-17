<script setup lang="ts">
import { type NavigationBarItemVM } from '../view-models';
import IconButton from '../buttons/IconButton.vue';

defineProps<{
  itemVMs: NavigationBarItemVM[]
}>()

const emits = defineEmits<{
  routeSelected: [key: string]
}>()
</script>

<template>
  <div class="item-bar">
    <IconButton 
      v-for="(vm, index) of itemVMs" 
      :key="index" :icon="vm.icon" 
      :label="vm.label" 
      :disabled="!vm.isEnabled"
      :class="`${vm.routeKey}`" 
      @click="emits('routeSelected', vm.routeKey)" 
    />
  </div>
</template>

<style scoped lang="scss">
@use '../styles/bars';
</style>
