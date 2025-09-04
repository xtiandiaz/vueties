<script setup lang="ts" generic="Value">
import SegmentedButton from '../../buttons/VuetySegmentedButton.vue';
import type { VuetySelectionOption } from '../../shared/view-models';

const model = defineModel<Value>({ required: true })

defineProps<{
  options: VuetySelectionOption<Value>[]
}>()
</script>

<template>
  <div class="vuety-segmented-button-form-row">    
    <SegmentedButton 
      v-model="model"
      :options="options" 
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
