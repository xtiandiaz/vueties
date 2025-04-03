<script setup lang="ts">
defineProps<{
  label: string,
  count?: number
}>()
</script>

<template>
  <span class="tag">
    {{ label }}
  </span>
</template>

<style scoped lang="scss">
@use '@/assets/varties';
@use '../styles/utils';
@use '@design-tokens/palette';
@use '@design-tokens/typography';

$background-opacity: 0.75;

span.tag {  
  border: 2px solid;
  display: inline-block;
  padding: 0.25em 0.5em;
  position: relative;
  @include palette.color-attribute('color', varties.$tag-color);
  @include palette.color-attribute(
    'background-color', 
    varties.$tag-background-color, 
    varties.$tag-background-opacity
  );
  @include palette.color-attribute(
    'border-color', 
    varties.$tag-background-color , 
    varties.$tag-background-opacity * 0.5
  );
  
  &, > * {
    border-radius: 2em;
  }
  &.small, &.tiny {
    @extend .caption;
  }
  &.small {
    padding: 0.125em 0.5em;
  }
  &.tiny {
    padding: 0 0.375em;
  }
  
  .background {
    @include palette.color-attribute('background-color', 'background');
  }
}
</style>
