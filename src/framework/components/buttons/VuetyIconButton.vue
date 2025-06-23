<script setup lang="ts">
import { Icon } from '@design-tokens/iconography'
import SvgIcon from '../misc/VuetySvgIcon.vue'

defineProps<{
  icon: Icon,
  label?: string
}>()
</script>

<template>
  <button type="button" class="icon-button">
    <SvgIcon :icon="icon" />
    <label v-if="label">{{ label }}</label>
  </button>
</template>

<style scoped lang="scss">
@use 'styles';
@use '../../utils/mixins';
@use '@design-tokens/palette';

button.icon-button {
  &.auxiliary {
    .svg-icon {
      @include mixins.size(1.5em);
      @include palette.color-attribute('color', 'tertiary-body');
    }
  }
}
</style>
