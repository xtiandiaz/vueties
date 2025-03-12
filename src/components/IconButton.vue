<script lang="ts" setup>
import { IconKey } from '@/assets/design-tokens/iconography'
import { ColorKey } from '@/assets/design-tokens/palette'
import SvgIcon from './SvgIcon.vue'

defineProps<{
  iconKey: IconKey,
  colorKey: ColorKey,
  annotation?: string
}>()
</script>

<template>
  <button>
    <SvgIcon :icon-key="iconKey" :color-key="colorKey" />
    <span v-if="annotation" class="annotation" :class="`color ${colorKey}`">
      {{ annotation }}
    </span>
  </button>
</template>

<style lang="scss" scoped>
@use '@/assets/design-tokens/typography';
@use './assets/buttons';

button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.15em;

  .icon {
    height: 2em;
    width: 2em;
  }

  .annotation {
    @extend .caption, .all-caps;
  }
}
</style>
