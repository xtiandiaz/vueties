<script lang="ts" setup>
import type { KeypadKeyVM } from '@vueties/view-models'
import KeypadButton from '@vueties/buttons/KeypadButton.vue';

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
@use '@vueties/styles/pads';
</style>
