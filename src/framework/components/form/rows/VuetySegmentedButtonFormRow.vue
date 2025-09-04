<script setup lang="ts" generic="Value">
import SegmentedButton from '../../buttons/VuetySegmentedButton.vue';
import type { VuetySelectionOption } from '../../shared/view-models';

defineProps<{
  choice: Value
  options: VuetySelectionOption<Value>[]
}>()

const emits = defineEmits<{
  selected: [key: Value]
}>()
</script>

<template>
  <div class="vuety-segmented-button-form-row">    
    <SegmentedButton 
      :choice="choice" 
      :options="options" 
      @selected="(value) => emits('selected', value)"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use '../styles';

.vuety-segmented-button-form-row {
  @extend %form-row;
  padding: 0 0.5rem;
   
  .representative-icon {
    @include vs.color-attribute('color', vs.$tertiary-body-color);
  }
}
</style>
