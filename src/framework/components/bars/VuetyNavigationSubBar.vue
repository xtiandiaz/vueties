<script setup lang="ts">
import { useRouter } from 'vue-router'
import { type VuetyNavigationBarItemVM } from './view-models';
import IconButton from '../buttons/VuetyIconButton.vue';

defineProps<{
  itemVMs: VuetyNavigationBarItemVM[]
}>()

const router = useRouter()
</script>

<template>
  <div class="item-bar">
    <IconButton 
      v-for="(vm, index) of itemVMs" 
      :disabled="!vm.isEnabled"
      :key="index" :icon="vm.icon" 
      :label="vm.label" 
      @click="router.push(vm.path)" 
    />
  </div>
</template>

<style scoped lang="scss">
@use 'styles';
</style>
