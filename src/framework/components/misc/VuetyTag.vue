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
@use '@/assets/varties';
@use '../../styles/mixins';
@use '@design-tokens/palette';
@use '@design-tokens/utils' as ds-utils;

.vuety-tag {
  align-items: center;
  display: inline-flex;
  gap: 0.25em;
  padding: 0.25em 0.75em;
  position: relative;
  
  &, .svg-icon {
    @include palette.color-attribute('color', varties.$tag-color);
  }
  
  .background {
    border-radius: 2em;
    opacity: varties.$tag-background-opacity;
    @include mixins.position(absolute, 0, 0, 0, 0);
    @include palette.color-attribute('background-color', varties.$tag-background-color);
  }
  
  .svg-icon {
    @include mixins.size(1.5em);
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
