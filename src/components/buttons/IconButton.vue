<script setup lang="ts">
import { Icon } from '@/assets/design-tokens/iconography'
import SvgIcon from '../misc/SvgIcon.vue'

defineProps<{
  icon: Icon,
  label?: string
}>()
</script>

<template>
  <button class="icon-button">
    <SvgIcon :icon="icon" />
    <label v-if="label">{{ label }}</label>
  </button>
</template>

<style scoped lang="scss">
@use '@vueties/styles/buttons';
</style>
