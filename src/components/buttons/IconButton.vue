<script lang="ts" setup>
import { IconKey } from '@/assets/design-tokens/iconography'
import { ColorKey } from '@/assets/design-tokens/palette'
import SvgIcon from '../assorted/SvgIcon.vue'

defineProps<{
  icon: IconKey,
  color: ColorKey,
  annotation?: string
}>()
</script>

<template>
  <button>
    <SvgIcon :icon="icon" :color="color" />
    <span v-if="annotation" class="annotation" :class="`color ${color}`">
      {{ annotation }}
    </span>
  </button>
</template>

<style lang="scss" scoped>
@use '@/assets/design-tokens/typography';
@use '../assets/buttons';

button {
  padding: 0.25em;
  position: relative;

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
