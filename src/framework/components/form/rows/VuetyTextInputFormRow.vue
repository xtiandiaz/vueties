<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  placeholder: string
}>()

const input = ref<string>()
</script>

<template>
  <div class="row text-input">    
    <input 
      type="text" 
      ref="textInput"
      v-model="input"
      :placeholder="placeholder"
    >
  </div>
</template>

<style scoped lang="scss">
@use '../styles';
</style>
