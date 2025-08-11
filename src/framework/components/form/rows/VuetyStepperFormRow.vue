<script setup lang="ts">
import Stepper from '../../misc/VuetyStepper.vue';
import type { Range } from '@/assets/tungsten/math';

defineProps<{
  initialValue: number
  range: Range
  step: number
  title: string
  
  suffix?: string
}>()

const emits = defineEmits<{
  setValue: [value: number]
}>()
</script>

<template>
  <div class="vuety-stepper-form-row">
    <span>{{ title }}</span>
    
    <div class="flex-spacer"></div>
    
    <Stepper 
      :initialValue="initialValue"
      :range="range"
      :step="step"
      :suffix="suffix"
      @setValue="value => emits('setValue', value)"
    />
  </div>
</template>

<style scoped lang="scss">
@use '../styles';

.vuety-stepper-form-row {
  @extend %form-row;
  
  padding-right: 0.25rem;
}
</style>
