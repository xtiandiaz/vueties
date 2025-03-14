<script setup lang="ts" generic="ToolKey">
import { type ITool } from '../models'
import IconButton from '../buttons/IconButton.vue'

defineProps<{
  tools: ITool<ToolKey>[]
}>()

const emits = defineEmits<{
  toolSelected: [key: ToolKey]
}>()
</script>

<template>
  <div class="bar tool-bar">
    <IconButton 
      v-for="(tool, index) of tools"
      :key="index"
      :icon="tool.icon"
      :class="tool.key"
      :disabled="!tool.isEnabled"
      @click="emits('toolSelected', tool.key)"
    />    
  </div>
</template>

<style scoped lang="scss">
@use '../assets/bars';

div.tool-bar {
  @extends .bar;
}
</style>
