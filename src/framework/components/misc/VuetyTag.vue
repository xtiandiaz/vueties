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
  gap: 0.25em;
  padding: 0.25em 0.75em;
  position: relative;
  
  &, .svg-icon {
    @include vs.color-attribute('color', vs.$tag-color);
  }
  
  .background {
    border-radius: 2em;
    opacity: vs.$tag-background-opacity;
    @include vs.position(absolute, 0, 0, 0, 0);
    @include vs.color-attribute('background-color', vs.$tag-background-color);
  }
  
  .svg-icon {
    @include vs.size(1.5em);
  }
  
  &.iconized {
    padding-left: 0.5em;
  }
  
  &.small {
    font-size: 0.9em;
    padding: 0.125em 0.75em;
  }
  
  &.tiny {
    font-size: 0.75em;
    padding: 0 0.5em;
  }
}
</style>
