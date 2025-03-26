<script setup lang="ts" generic="Tool">
import { type ToolBarButtonVM } from '@vueties/view-models'
import IconButton from '@vueties/buttons/IconButton.vue'

defineProps<{
  buttonVMs: ToolBarButtonVM<Tool>[]
}>()

const emits = defineEmits<{
  toolSelected: [tool: Tool]
}>()
</script>

<template>
  <div class="item-bar tool-bar">
    <IconButton v-for="(vm, index) of buttonVMs" :key="index" :icon="vm.icon" :label="vm.label"
      :disabled="!vm.isEnabled" :class="vm.tool" @click="emits('toolSelected', vm.tool)" />
  </div>
</template>

<style scoped lang="scss">
@use '@vueties/styles/bars';

.tool-bar {
  @extend .item-bar;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
