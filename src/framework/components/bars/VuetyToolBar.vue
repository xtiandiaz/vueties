<script setup lang="ts" generic="Key">
import type { VuetyToolbarItem } from '../shared/view-models';
import IconButton from '../buttons/VuetyIconButton.vue'

defineProps<{
  items: VuetyToolbarItem<Key>[]
}>()

const emits = defineEmits<{
  setTool: [key: Key]
}>()
</script>

<template>
  <div class="vuety-toolbar">
    <IconButton 
      v-for="(item, index) of items" 
      :key="index" 
      :class="[item.key, { disabled: !(item.isEnabled ?? true)}]" 
      :icon="item.icon" 
      :label="item.label"
      @click="emits('setTool', item.key)" 
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
