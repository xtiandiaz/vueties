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
      <label>{{ segment.label }}</label>
    </button>
  </div>
</template>

<style scoped lang="scss">
@use 'styles';
@use '../../styles/mixins';
@use '@/assets/varties';
@use '@design-tokens/palette';

.vuety-segmented-button {
  overflow: hidden;
  
  &, * {
    position: relative;
  }
  
  .background, .selection-background {
    border-radius: 2em;
    @include mixins.position(absolute, 0.5em, 0, 0.5em, 0);
  }
  
  .background {
    @include palette.color-attribute('background-color', 'secondary-background');
  }
  
  .selection-background {
    visibility: hidden;
    @include palette.color-attribute('background-color', varties.$tint-color);
  }
  
  button {
    padding: 0 1em;
    
    &.selected {
      @include palette.color-attribute('color', 'background');
      
      .selection-background {
        visibility: visible;
      }
    }
    
    label {
      @extend .strong;
    }
  }
}
</style>
