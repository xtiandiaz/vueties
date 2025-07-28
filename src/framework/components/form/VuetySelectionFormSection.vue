<script setup lang="ts" generic="Value">
import { type VuetySelectionOption } from '../shared-vm'
import FormSection from './VuetyFormSection.vue';
import OptionRow from './rows/VuetyOptionFormRow.vue'
import type { Icon } from '@/assets/design-tokens/iconography';

const { choices, minimumChoiceCount } = defineProps<{
  choices: Value[]
  options: VuetySelectionOption<Value>[]
  minimumChoiceCount: number
  
  footnote?: string
  icon?: Icon
  title?: string
  subtitle?: string
}>()

const emits = defineEmits<{
  deselect: [value: Value]
  select: [value: Value]
}>()

function onTapped(value: Value) {
  if (choices.includes(value) && choices.length > minimumChoiceCount) {
    emits('deselect', value)
  } else if (!choices.includes(value)) {
    emits('select', value)
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
      :isSelected="choices.includes(option.value)"
      :icon="option.icon"
      :title="option.title"
      :subtitle="option.subtitle"
      @select="(value) => onTapped(value)" 
    />
  </FormSection>
</template>

<style scoped lang="scss">
@use 'styles';

.vuety-selection-form-section {
  @extend %form-section;
}
</style>
