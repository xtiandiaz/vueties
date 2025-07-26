<script setup lang="ts">
import SvgIcon from '../misc/VuetySvgIcon.vue';
import { Icon } from '@design-tokens/iconography'

const emits = defineEmits<{
  input: [value: number]
}>()
</script>

<template>
  <div class="pad number-pad">
    <button 
      v-for="(value) of [7, 8, 9, 4, 5, 6, 1, 2, 3, -2, 0, -1]" 
      :key="value"
      @click="emits('input', value)"
    >
      <label v-if="value >= 0">{{ value }}</label>
      <SvgIcon v-else :icon="value === -1 ? Icon.Delete : Icon.Clear" />
    </button>
  </div>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use 'styles';
@use '../buttons/styles' as button-styles;

.number-pad {
  border-radius: 1.5em;
  gap: 2px !important;
  height: 100%;
  width: 100%;
  
  button {
    height: auto;
    flex: 1 1 30%;
    vertical-align: middle;
    @include vs.color-attributes((
      'background-color': vs.$keypad-key-background-color,
      'color': vs.$keypad-key-color
    ));
    
    label {
      @extend h4;
    }
    
    .svg-icon {
      @include vs.size(2em);
      @include vs.color-attribute('color', vs.$tertiary-body-color);
    }
  }
}
</style>
