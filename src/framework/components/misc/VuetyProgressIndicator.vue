<script setup lang="ts">
import { Icon } from '@design-tokens/iconography'
import SvgIcon from './VuetySvgIcon.vue'
</script>

<template>
  <SvgIcon :icon="Icon.Spinner" class="vuety-progress-indicator" />
</template>

<style scoped lang="scss">
@use '@design-tokens/palette';

@keyframes spin {
  100% { rotate: 180deg; }
}

.vuety-progress-indicator {
  animation: spin 1s linear 0s infinite;
  display: inline-block;
  @include palette.color-attribute('color', 'accessory');
}
</style>
