<script lang="ts" setup>
import SvgIcon from '../misc/VuetySvgIcon.vue';
import type { KeypadKeyVM } from '../view-models'

defineProps<{
  keyVMs: KeypadKeyVM[]
}>()

const emits = defineEmits<{
  input: [value: number | string]
}>()
</script>

<template>
  <div class="pad key-pad">
    <button 
      v-for="(vm, index) of keyVMs" 
      :key="index" 
      :disabled="!vm.isEnabled" 
      :class="{ iconized: vm.icon !== undefined }"
      @click="emits('input', vm.value)"
    >
      <SvgIcon v-if="vm.icon" :icon="vm.icon" />
      <label v-else :class="{ dimmed: vm.isDimmed }">{{ vm.label }}</label>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/pads';
@use '../styles/buttons';
@use '@/assets/varties';
@use '@design-tokens/palette';
@use '@design-tokens/typography';

.key-pad {
  button {
    border-radius: 0.5em;
    height: 3em;
    vertical-align: middle;
    width: 3em;
    @include palette.color-attributes((
      'background-color': varties.$key-background-color,
      'color': varties.$key-color
    ));
    
    &:disabled {
      background-color: transparent;
    }

    &.iconized:enabled {
      @include palette.color-attributes((
        'background-color': varties.$key-color,
        'color': varties.$key-background-color
      ));
    }

    label {
      @extend h5;
      
      &.dimmed {
        opacity: 25%;
      }
    }
    
    .svg-icon {
      height: 2em;
      width: 2em;
    }
  }
}
</style>
