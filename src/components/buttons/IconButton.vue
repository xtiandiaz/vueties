<script setup lang="ts">
import { Icon } from '@/assets/design-tokens/iconography'
import SvgIcon from '../assorted/SvgIcon.vue'

defineProps<{
  icon: Icon,
  label?: string
}>()
</script>

<template>
  <button class="icon-button">
    <SvgIcon :icon="icon" />
    <label v-if="label">{{ label }}</label>
  </button>
</template>

<style scoped lang="scss">
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
  
  &:disabled {
    background: none;
  }

  label {
    @extend .caption;
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translate(-50%, calc(100% - 0.5em));
  }
  
  .svg-icon {
    $size: calc($size - 1em);
    height: $size;
    width: $size;
  }
}
</style>
