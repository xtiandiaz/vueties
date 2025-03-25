<script setup lang="ts">
import { Icon, svgIconString } from '@/assets/design-tokens/iconography'

defineProps<{
  icon: Icon
}>()
</script>

<template>
  <span class="svg-icon" v-html="svgIconString(icon)"></span>
</template>

<style scoped lang="scss">
.svg-icon {
  display: inline-block;
  min-height: 1em;
  min-width: 1em;
  vertical-align: middle;
}
</style>
