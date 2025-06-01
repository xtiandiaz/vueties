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
@use 'styles';
@use '../buttons/styles' as button-styles;
@use '@design-tokens/palette';
@use '@design-tokens/typography';
@use '@/assets/varties';

.number-pad {
  border-radius: 1.5em;
  gap: 2px !important;
  height: 100%;
  width: 100%;
  
  button {
    height: auto;
    vertical-align: middle;
    flex: 1 1 30%;
    @include palette.color-attributes((
      'background-color': varties.$key-background-color,
      'color': varties.$key-color
    ));
    
    label {
      @extend h4;
    }
    
    .svg-icon {
      height: 2em;
      width: 2em;
      @include palette.color-attribute('color', 'tertiary-body');
    }
  }
}
</style>
