<script setup lang="ts" generic="Tool">
import { type ToolBarButtonVM } from '../view-models'
import IconButton from '../buttons/IconButton.vue'

defineProps<{
  buttonVMs: ToolBarButtonVM<Tool>[]
}>()

const emits = defineEmits<{
  toolSelected: [tool: Tool]
}>()
</script>

<template>
  <div class="bar tool-bar">
    <IconButton 
      v-for="(vm, index) of buttonVMs"
      :key="index"
      :icon="vm.icon"
      :label="vm.label"
      :disabled="!vm.isEnabled"
      :class="vm.tool"
      @click="emits('toolSelected', vm.tool)"
    />    
  </div>
</template>

<style scoped lang="scss">
@use '../assets/bars';

div.tool-bar {
  @extend .bar;
  justify-content: center;
}
</style>
