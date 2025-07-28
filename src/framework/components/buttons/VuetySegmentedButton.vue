<script setup lang="ts" generic="Value">
import type { VuetySelectionOption } from '../shared.vm';
import SvgIcon from '../misc/VuetySvgIcon.vue';

defineProps<{
  choice: Value
  options: VuetySelectionOption<Value>[]
}>()

const emits = defineEmits<{
  select: [value: Value]
}>()
</script>

<template>
  <div class="vuety-segmented-button">
    <div class="background"></div>
    
    <button 
      v-for="(option, index) of options"
      type="button"
      :key="index"
      :class="{ selected: choice === option.value}"
      @click="emits('select', option.value)"
    >
      <div class="selection-background"></div>
      <SvgIcon v-if="option.icon" :icon="option.icon" />
      <label v-if="option.title.length > 0">{{ option.title }}</label>
    </button>
  </div>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use 'styles';

.vuety-segmented-button {
  @extend %button;
  width: fit-content;
  
  &, * {
    position: relative;
  }
  
  .background, .selection-background {
    border-radius: 2rem;
    @include vs.position(absolute, 0.5rem, 0, 0.5rem, 0);
  }
  
  .background {
    @include vs.color-attribute('background-color', vs.$background-color);
  }
  
  .selection-background {
    visibility: hidden;
    @include vs.color-attribute('background-color', vs.$tint-color);
  }
  
  button {
    padding: 0 1rem;
    position: relative;
    flex: 1 1 100%;
    gap: 0.25rem;
    
    &.selected {
      @include vs.color-attribute('color', vs.$background-color);
      
      .selection-background {
        visibility: visible;
      }
    }
    
    label {
      @extend %strong;
    }
  }
}
</style>
