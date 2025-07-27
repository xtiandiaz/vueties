<script setup lang="ts" generic="Key">
import SvgIcon from '../misc/VuetySvgIcon.vue';
import type { VuetySegmentedButtonSegment } from './view-models';

defineProps<{
  choice: Key
  segments: VuetySegmentedButtonSegment<Key>[]
}>()

const emits = defineEmits<{
  select: [key: Key]
}>()
</script>

<template>
  <div class="vuety-segmented-button">
    <div class="background"></div>
    
    <button 
      v-for="(segment, index) of segments"
      type="button"
      :key="index"
      :class="{ selected: choice === segment.key}"
      @click="emits('select', segment.key)"
    >
      <div class="selection-background"></div>
      <SvgIcon v-if="segment.icon" :icon="segment.icon" />
      <label v-if="segment.label.length > 0">{{ segment.label }}</label>
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
