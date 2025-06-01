<script setup lang="ts">
import SvgIcon from '../misc/VuetySvgIcon.vue';
import { Icon } from '@design-tokens/iconography';

defineProps<{
  icon: Icon,
  value: string | number
}>()
</script>

<template>
  <span class="data-mark">
    <SvgIcon :icon="icon" />
    <span>{{ String(value) }}</span>
  </span>
</template>

<style scoped lang="scss">
@use '@design-tokens/typography';

span.data-mark {
  display: inline-block;
  
  &, > * {
    display: inline-block;
    vertical-align: middle;
  }
  
  &.small {
    @extend .caption;
  }
  
  &.large {
    @extend .h6;
  }
  
  .svg-icon {
    width: 1em;
    margin-right: 0.25em;
  }
}
</style>
