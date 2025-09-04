<script setup lang="ts" generic="Value">
import { type VuetySelectionOption } from '../shared/view-models'
import FormSection from './VuetyFormSection.vue';
import OptionRow from './rows/VuetyOptionFormRow.vue'
import type { Icon } from '@/assets/design-tokens/iconography';
import type { Range } from '@/assets/tungsten/math';

const model = defineModel<Value[]>({ default: [], required: true })

const { choiceRange } = defineProps<{
  choiceRange: Range
  options: VuetySelectionOption<Value>[]
  
  footnote?: string
  icon?: Icon
  title?: string
  subtitle?: string
}>()

function onOptionPicked(value: Value) {  
  if (model.value.includes(value)) {
    if (model.value.length > choiceRange.min) {
      model.value.remove(c => c === value)
    }
  } else {
    if (model.value.length >= choiceRange.max) {
      model.value.pop()
    }
    model.value.push(value)
  }
}
</script>

<template>
  <FormSection
    class="vuety-selection-form-section"
    :icon="icon"
    :title="title"
    :subtitle="subtitle"
    :footnote="footnote"
  >
    <OptionRow 
      v-for="(option, index) in options" 
      :key="index"
      :value="option.value"
      :isSelected="model.includes(option.value)"
      :icon="option.icon"
      :title="option.title"
      :subtitle="option.subtitle"
      @picked="(value) => onOptionPicked(value)" 
    />
  </FormSection>
</template>

<style scoped lang="scss">
@use 'styles';

.vuety-selection-form-section {
  @extend %form-section;
}
</style>
