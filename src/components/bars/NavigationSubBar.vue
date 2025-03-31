<script setup lang="ts" generic="Target">
import { type NavigationBarItemVM } from '../view-models';
import IconButton from '../buttons/IconButton.vue';

defineProps<{
  itemVMs: NavigationBarItemVM<Target>[]
}>()

const emits = defineEmits<{
  targetSelected: [target: Target]
}>()
</script>

<template>
  <div class="item-bar">
    <IconButton 
      v-for="(vm, index) of itemVMs" 
      :key="index" :icon="vm.icon" 
      :label="vm.label" 
      :disabled="!vm.isEnabled"
      :class="`${vm.target}`" 
      @click="emits('targetSelected', vm.target)" 
    />
  </div>
</template>

<style scoped lang="scss">
@use '../styles/bars';
</style>
