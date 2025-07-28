<script setup lang="ts" generic="Key">
import type { VuetyToolbarItem } from '../shared.vm';
import IconButton from '../buttons/VuetyIconButton.vue'

defineProps<{
  items: VuetyToolbarItem<Key>[]
}>()

const emits = defineEmits<{
  enableTool: [key: Key]
}>()
</script>

<template>
  <div class="vuety-toolbar">
    <IconButton 
      v-for="(item, index) of items" 
      :key="index" 
      :class="item.key" 
      :icon="item.icon" 
      :label="item.label"
      @click="emits('enableTool', item.key)" 
    />
  </div>
</template>

<style scoped lang="scss">
@use 'styles';

.vuety-toolbar {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
