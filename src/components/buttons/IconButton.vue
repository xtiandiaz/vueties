<script setup lang="ts">
import { IconKey } from '@/assets/design-tokens/iconography'
import SvgIcon from '../assorted/SvgIcon.vue'

defineProps<{
  icon: IconKey,
  annotation?: string
}>()
</script>

<template>
  <button class="icon-button">
    <SvgIcon :icon="icon" />
    <span v-if="annotation" class="annotation">
      {{ annotation }}
    </span>
  </button>
</template>

<style scoped lang="scss">
@use '@/assets/theme';
@use '@/assets/design-tokens/palette';
@use '@/assets/design-tokens/typography';
@use '../assets/buttons';

button.icon-button {
  $icon-size: 2em;
  $size: calc($icon-size + 1em);
  
  border-radius: 50%;
  height: $size;
  padding: 0;
  position: relative;
  width: $size;
  @include palette.color-attribute('color', theme.$tint-color);

  .annotation {
    @extend .caption;
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translate(-50%, calc(100% - 0.25em));
  }
  .svg-icon {
    height: $icon-size;
    width: $icon-size;
  }
}
</style>
