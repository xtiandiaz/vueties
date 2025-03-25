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
@use '@vueties/styles/buttons';
@use '@/assets/theme';
@use '@/assets/design-tokens/palette';
@use '@/assets/design-tokens/typography';

button.text-button {
  border-radius: 2em;
  color: white;
  padding: 0 1.25em;

  label {
    display: inline-block;
    font-size: 0.9em;
  }

  @include palette.color-attributes(('background-color': theme.$tint-color ));
}
</style>
