<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <button class="text-button">
    <label class="strong">{{ label }}</label>
  </button>
</template>

<style scoped lang="scss">
@use 'styles';
@use '@/assets/varties';
@use '@design-tokens/palette';
@use '@design-tokens/typography';

button.text-button {
  border-radius: 2em;
  color: white;
  padding: 0 1.25em;

  label {
    display: inline-block;
    font-size: 0.9em;
  }

  @include palette.color-attributes(('background-color': varties.$tint-color));
}
</style>
