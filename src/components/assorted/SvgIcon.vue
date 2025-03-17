<script lang="ts" setup>
import { IconKey, svgIconString } from '@/assets/design-tokens/iconography'

defineProps<{
  icon: IconKey
}>()
</script>

<template>
  <span class="svg-icon" v-html="svgIconString(icon)"></span>
</template>

<style lang="scss" scoped>
@use '../assets/assorted';

.svg-icon {
  display: inline-block;
  vertical-align: middle;
}
</style>
