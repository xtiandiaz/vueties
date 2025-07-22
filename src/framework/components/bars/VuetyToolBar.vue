<script setup lang="ts" generic="Tool">
import { type VuetyToolBarButtonVM } from './view-models'
import IconButton from '../buttons/VuetyIconButton.vue'

defineProps<{
  buttonVMs: VuetyToolBarButtonVM<Tool>[]
}>()

const emits = defineEmits<{
  toolSelected: [tool: Tool]
}>()
</script>

<template>
  <div class="vuety-toolbar">
    <IconButton 
      v-for="(vm, index) of buttonVMs" 
      :key="index" 
      :class="vm.tool" 
      :disabled="!(vm.isEnabled ?? true)" 
      :icon="vm.icon" 
      :label="vm.label"
      @click="emits('toolSelected', vm.tool)" 
    />
  </div>
</template>

<style scoped lang="scss">
@use 'styles';

.vuety-toolbar {
  @extend .item-bar;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
