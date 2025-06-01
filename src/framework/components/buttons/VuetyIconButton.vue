<script setup lang="ts">
import { Icon } from '@design-tokens/iconography'
import SvgIcon from '../misc/VuetySvgIcon.vue'

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
@use 'styles';
</style>
