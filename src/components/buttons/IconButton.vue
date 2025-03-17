<script setup lang="ts">
import { IconKey } from '@/assets/design-tokens/iconography'
import SvgIcon from '../assorted/SvgIcon.vue'

defineProps<{
  icon: IconKey,
  label?: string
}>()
</script>

<template>
  <button class="icon-button">
    <SvgIcon :icon="icon" />
    <span v-if="label" class="label">
      {{ label }}
    </span>
  </button>
</template>

<style scoped lang="scss">
@use '@/assets/theme';
@use '@/assets/design-tokens/palette';
@use '@/assets/design-tokens/typography';
@use '../assets/buttons';

button.icon-button {
  $size: 3em;
  
  border-radius: 50%;
  height: $size;
  padding: 0;
  position: relative;
  width: $size;
  @include palette.color-attribute('color', theme.$tint-color);
  
  &:disabled {
    background: none;
  }

  .label {
    @extend .caption;
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translate(-50%, calc(100% - 0.25em));
  }
  .svg-icon {
    $size: calc($size - 1em);
    height: $size;
    width: $size;
  }
}
</style>
