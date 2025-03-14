<script lang="ts" setup>
import { IconKey } from '@/assets/design-tokens/iconography'
import SvgIcon from '../assorted/SvgIcon.vue'

defineProps<{
  icon: IconKey,
  annotation?: string
}>()
</script>

<template>
  <button>
    <SvgIcon :icon="icon" />
    <span v-if="annotation" class="annotation">
      {{ annotation }}
    </span>
  </button>
</template>

<style lang="scss" scoped>
@use '@/assets/theme';
@use '@/assets/design-tokens/palette';
@use '@/assets/design-tokens/typography';
@use '../assets/buttons';

button {
  padding: 0.25em;
  position: relative;
  @include palette.color-attribute('color', theme.$tint-color);

  .icon {
    height: 2em;
    width: 2em;
  }

  .annotation {
    @extend .caption, .all-caps;
    bottom: 0;
    left: 50%;
    opacity: 50%;
    position: absolute;
    transform: translate(-50%, 100%);
  }
}
</style>
