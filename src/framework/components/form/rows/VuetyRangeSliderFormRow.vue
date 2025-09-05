<script setup lang="ts">
import type { Range } from '@/assets/tungsten/math';
import VuetyRangeSlider from '../../misc/VuetyRangeSlider.vue';
import type { Icon } from '@/assets/design-tokens/iconography';

const model = defineModel()

defineProps<{
  range: Range,
  step: number,
  
  maxIcon?: Icon,
  minIcon?: Icon,
}>()
</script>

<template>
  <div class="vuety-range-slider-form-row">    
    <VuetyRangeSlider
      v-model="model" 
      :range="range"
      :step="step"
      :min-icon="minIcon"
      :max-icon="maxIcon"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use '../styles';

.vuety-range-slider-form-row {
  @extend %form-row;
  
  .vuety-range-slider {
    width: 100%;
  }
}
</style>
