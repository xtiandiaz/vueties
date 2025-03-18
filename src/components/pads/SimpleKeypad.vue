<script lang="ts" setup>
import type { IKeypadKeyVM } from '../view-models'
import KeypadButton from '../buttons/KeypadButton.vue';

defineProps<{
  keys: IKeypadKeyVM[]
}>()

const emits = defineEmits<{
  input: [value: number | string]
}>()
</script>

<template>
  <div class="pad simple-keypad">
    <KeypadButton 
      v-for="(key, index) of keys"
      :key="index"
      :keypadKey="key"
      :disabled="!key.isEnabled"
      @click="emits('input', key.value)"
    />
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/pads';
</style>
