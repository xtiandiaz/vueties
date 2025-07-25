<script setup lang="ts">
import { Icon, svgIconString } from '@design-tokens/iconography'

defineProps<{
  icon: Icon
}>()
</script>

<template>
  <span class="svg-icon" v-html="svgIconString(icon)"></span>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;

.svg-icon {
  aspect-ratio: 1;
  display: inline-block;
  line-height: 1;
  @include vs.min-size(1em);
}
</style>
