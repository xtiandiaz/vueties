<script lang="ts" setup>
import type { KeypadKeyVM } from '../view-models'
import KeypadButton from '../buttons/KeypadButton.vue';

defineProps<{
  keyVMs: KeypadKeyVM[]
}>()

const emits = defineEmits<{
  input: [value: number | string]
}>()
</script>

<template>
  <div class="pad simple-keypad">
    <KeypadButton v-for="(vm, index) of keyVMs" :key="index" :vm="vm" @click="emits('input', vm.value)" />
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/pads';
</style>
