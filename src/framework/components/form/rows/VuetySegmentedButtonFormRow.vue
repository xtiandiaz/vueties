<script setup lang="ts" generic="Value">
import SegmentedButton from '../../buttons/VuetySegmentedButton.vue';
import type { VuetySelectionOption } from '../../shared.vm';

defineProps<{
  choice: Value
  options: VuetySelectionOption<Value>[]
}>()

const emits = defineEmits<{
  select: [key: Value]
}>()
</script>

<template>
  <div class="vuety-segmented-button-form-row">    
    <SegmentedButton 
      :choice="choice" 
      :options="options" 
      @select="(value) => emits('select', value)"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use '../styles';

.vuety-segmented-button-form-row {
  @extend %form-row;
   
  .representative-icon {
    @include vs.color-attribute('color', vs.$tertiary-body-color);
  }
}
</style>
