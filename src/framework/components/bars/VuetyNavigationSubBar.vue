<script setup lang="ts">
import type { VuetyNavigationBarItemVM } from './view-models';
import IconButton from '../buttons/VuetyIconButton.vue';

defineProps<{
  itemVMs: VuetyNavigationBarItemVM[]
}>()

const emits = defineEmits<{
  goTo: [path: string]
}>()
</script>

<template>
  <div class="item-bar">
    <IconButton 
      v-for="(vm, index) of itemVMs" 
      :key="index" 
      :disabled="!(vm.isEnabled ?? true)"
      :icon="vm.icon" 
      :label="vm.label" 
      @click="emits('goTo', vm.path.replace('{current}', $route.path != '/' ? $route.path : ''))" 
    />
  </div>
</template>

<style scoped lang="scss">
@use 'styles';
</style>
