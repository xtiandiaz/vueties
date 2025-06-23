<script setup lang="ts">
import { ref } from 'vue'
import IconButton from '../../buttons/VuetyIconButton.vue';
import { Icon } from '@design-tokens/iconography';

defineProps<{
  placeholder: string
}>()

const input = ref<string>()
</script>

<template>
  <div class="row text-input">
    <input 
      type="text" 
      v-model="input"
      :placeholder="placeholder"
    >
    <IconButton 
      :icon="Icon.Xmark" 
      :class="{ disabled: !input }" class="auxiliary" 
      @click="input = undefined"
    />
  </div>
</template>

<style scoped lang="scss">
@use 'sass:math';
@use '../styles';
@use '@vueties/utils/styles' as util-styles;
@use '@design-tokens/typography';

.row.text-input {
  padding-right: 0;
  gap: 0;
}

input {
  @extend .body;
  border: none;
  padding: 0.5em 0;
  width: 100%;
}
</style>
