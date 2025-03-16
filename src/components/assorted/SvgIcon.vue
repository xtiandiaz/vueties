<script lang="ts" setup>
import { IconKey, svgIconString } from '@/assets/design-tokens/iconography'

defineProps<{
  icon: IconKey
}>()
</script>

<template>
  <svg class="svg-icon" v-html="svgIconString(icon)"></svg>
</template>

<style lang="scss" scoped>
@use '../assets/assorted';

.svg-icon {
  vertical-align: middle;
}
</style>
