<script setup lang="ts" generic="Target">
import IconButton from '../buttons/IconButton.vue';
import { type NavigationBarItemVM } from '../view-models';

defineProps<{
  itemVMs: NavigationBarItemVM<Target>[]
}>()

const emits = defineEmits<{
  targetSelected: [target: Target]
}>()
</script>

<template>
<div class="bar">
  <IconButton 
    v-for="(vm, index) of itemVMs" 
    :key="index"
    :icon="vm.icon"
    :label="vm.label"
    :disabled="!vm.isEnabled"
    :class="`${vm.target}`"
    @click="emits('targetSelected', vm.target)"
  />
</div>
</template>

<style scoped lang="scss">
@use '../assets/bars';
</style>
