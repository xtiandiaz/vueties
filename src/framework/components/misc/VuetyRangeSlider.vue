<script setup lang="ts">
import VuetySvgIcon from './VuetySvgIcon.vue';
import { Icon } from '@design-tokens/iconography';
import type { Range } from '@/assets/tungsten/math';

const model = defineModel()

defineProps<{
  range: Range
  step: number
  
  maxIcon?: Icon,
  minIcon?: Icon,
}>()
</script>

<template>
  <div class="vuety-range-slider">
    <VuetySvgIcon v-if="minIcon" :icon="minIcon" />
    
    <input 
      type="range" 
      v-model="model"
      :min="range.min" 
      :max="range.max" 
      :step="step"
    >
    
    <VuetySvgIcon v-if="maxIcon" :icon="maxIcon" />
  </div>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;

@mixin no-appearance() {
  -webkit-appearance: none;
  appearance: none;
}

@mixin progress-bar() {
  border-radius: 4px;
  height: 4px;
  @include no-appearance();
  @include vs.color-attribute('background', vs.$tint-color);
}

@mixin thumb() {
  border: none;
  border-radius: 50%;
  cursor: pointer;
  @include no-appearance();
  @include vs.color-attributes((
    'background': vs.$tint-color
  ));
  @include vs.size(1.25rem);
}

@mixin track() {
  border-radius: 4px;
  height: 4px;
  @include no-appearance();
  @include vs.color-attribute('background', vs.$tertiary-background-color);
}

.vuety-range-slider {
  align-items: center;
  display: flex;
  gap: 0.5rem;
  height: 3rem;
  
  input[type=range] {
    border-radius: 4px;
    flex-grow: 1;
    height: 4px;
    outline: none;
    @include track();
    
    &::-moz-range-progress {
      @include progress-bar();
    }
    
    &::-moz-range-thumb {
      @include thumb();
    }
    &::-webkit-slider-thumb {
      @include thumb();
    }
    
    &::-moz-range-track {
      @include track();
    }
  }
  
  .svg-icon {
    @include vs.color-attribute('color', vs.$tertiary-body-color);
    @include vs.size(1.75rem);
  }
}
</style>
