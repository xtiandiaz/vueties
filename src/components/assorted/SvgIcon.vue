<script lang="ts" setup>
import { IconKey, svgIconString } from '@/assets/design-tokens/iconography'
import { ColorKey } from '@/assets/design-tokens/palette'

defineProps<{
  icon: IconKey,
  color: ColorKey
}>()
</script>

<template>
  <svg class="icon" :class="`color ${color}`" v-html="svgIconString(icon)"></svg>
</template>
