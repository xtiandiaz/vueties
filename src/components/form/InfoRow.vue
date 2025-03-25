<script setup lang="ts">
const { title } = defineProps<{
  title: string,
  value?: string,
}>()
</script>

<template>
  <div class="row info">
    <span class="title">{{ title }}</span>
    <div class="spacer"></div>
    <span v-if="value" class="value">{{ value }}</span>
    <slot v-if="!value" name="custom-value"></slot>
  </div>
</template>

<style lang="scss">
@use '@vueties/styles/form';
@use '@/assets/design-tokens/palette';

.row.info {
  .value {
    @include palette.color-attribute('color', 'secondary-body');
  }
}
</style>
