<script setup lang="ts">
import type { Icon } from '@design-tokens/iconography';
import SvgIcon from './VuetySvgIcon.vue';

defineProps<{
  label: string,
  icon?: Icon
}>()
</script>

<template>
  <div :class="['vuety-tag', icon ? 'iconized' : undefined]">
    <div class="background"></div>
    
    <SvgIcon v-if="icon" :icon="icon" />
    {{ label }}
  </div>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;

.vuety-tag {
  align-items: center;
  display: inline-flex;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  position: relative;
  
  &, .svg-icon {
    @include vs.color-attribute('color', vs.$tag-color);
  }
  
  &.small {
    font-size: 0.9rem;
    gap: 0.2rem;
    padding: 0.125rem 0.5rem;
  }
  
  &.tiny {
    font-size: 0.75rem;
    gap: 0.15rem;
    padding: 0 0.375rem;
  }
  
  &.iconized {
    padding-left: 0.5rem;
    
    &.small {
      padding-left: 0.25rem;
      
      .svg-icon {
        @include vs.size(1.25rem);
      }
    }
    
    &.tiny {
      padding-left: 0.25rem;
      
      .svg-icon {
        @include vs.size(1rem);
      }
    }
  }
  
  .background {
    border-radius: 2rem;
    opacity: vs.$tag-background-opacity;
    @include vs.position(absolute, 0, 0, 0, 0);
    @include vs.color-attribute('background-color', vs.$tag-background-color);
  }
  
  .svg-icon {
    @include vs.size(1.5rem);
  }
}
</style>
