<script setup lang="ts">
import { Icon } from '@/assets/design-tokens/iconography';
import SvgIcon from '@vueties/misc/SvgIcon.vue';

defineProps<{
  label: string,
  icon?: Icon
}>()
</script>

<template>
  <div class="row button">
    <SvgIcon v-if="icon" :icon="icon" />
    <label>{{ label }}</label>
  </div>
</template>

<style scoped lang="scss">
@use '@vueties/styles/form';
@use '@/assets/theme';
@use '@/assets/design-tokens/palette';
@use '@/assets/design-tokens/typography';

$icon-size: 1.5em;

.row.button {
  @extend .strong;
  gap: 0.5em !important;
  justify-content: center;
  @include palette.color-attribute('color', theme.$tint-color);

  &:hover,
  label:hover {
    cursor: pointer;
  }

  .svg-icon {
    height: $icon-size;
    width: $icon-size;
  }
}
</style>
