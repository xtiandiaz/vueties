<script lang="ts" setup>
import { IconKey, svgIconString } from '@/assets/design-tokens/iconography'

defineProps<{
  icon: IconKey
}>()
</script>

<template>
  <svg class="icon" v-html="svgIconString(icon)"></svg>
</template>
