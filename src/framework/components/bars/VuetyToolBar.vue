<script setup lang="ts" generic="Key">
import type { VuetyToolbarItem } from '../shared/view-models';
import IconButton from '../buttons/VuetyIconButton.vue'

defineProps<{
  items: VuetyToolbarItem<Key>[]
}>()

const emits = defineEmits<{
  selectItem: [item: VuetyToolbarItem<Key>]
}>()
</script>

<template>
  <div class="vuety-toolbar">
    <IconButton 
      v-for="(item, index) of items.filter(it => it.icon != undefined)" 
      :key="index" 
      :class="[item.key, { disabled: !(item.isEnabled ?? true)}]" 
      :icon="item.icon!" 
      :label="item.label"
      @click="item.action?.() ?? emits('selectItem', item)" 
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
