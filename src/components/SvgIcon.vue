<script lang="ts" setup>
import { IconKey, svgIconString } from './assets/design-tokens/iconography'
import { ColorKey } from './assets/design-tokens/palette'

defineProps<{
  iconKey: IconKey,
  colorKey: ColorKey
}>()
</script>

<template>
  <svg class="icon" :class="`color ${colorKey}`" v-html="svgIconString(iconKey)"></svg>
</template>
