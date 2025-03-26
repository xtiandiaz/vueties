<script setup lang="ts">
import { Icon } from '@design-tokens/iconography';
import SvgIcon from '../misc/SvgIcon.vue';

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
@use '../styles/form';
@use '@/assets/varties';
@use '@design-tokens/palette';
@use '@design-tokens/typography';

$icon-size: 1.5em;

.row.button {
  @extend .strong;
  gap: 0.5em !important;
  justify-content: center;
  @include palette.color-attribute('color', varties.$tint-color);

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
