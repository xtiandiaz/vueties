<script setup lang="ts">
const { title } = defineProps<{
  title: string,
  value?: string
}>()
</script>

<template>
  <div class="row info">
    <span class="title">{{ title }}</span>
    <div class="spacer"></div>
    <span v-if="value" class="value">{{ value }}</span>
  </div>
</template>

<style lang="scss">
@use '@/assets/design-tokens/palette';
@use '../assets/form';

.row.info {
  .value {
    @include palette.color-attribute('color', 'secondary-body');
  }
}
</style>
