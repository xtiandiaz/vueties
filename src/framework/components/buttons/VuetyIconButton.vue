<script setup lang="ts">
import { Icon } from '@design-tokens/iconography'
import SvgIcon from '../misc/VuetySvgIcon.vue'

defineProps<{
  icon: Icon,
  
  label?: string
}>()
</script>

<template>
  <button class="vuety-icon-button" type="button">
    <SvgIcon :icon="icon" />
    <label v-if="label">{{ label }}</label>
  </button>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use 'styles';

.vuety-icon-button {
  @extend %vuety-icon-button;
  
  &.filled {
    @include vs.color-attribute('background-color', vs.$background-color);
  }
  
  &.auxiliary {
    .svg-icon {
      @include vs.size(1.25em);
      @include vs.color-attribute('color', vs.$tertiary-body-color);
    }
  }
  
  .svg-icon {
    @include vs.color-attribute('color', vs.$tint-color);
  }
}
</style>
