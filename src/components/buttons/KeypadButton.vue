<script lang="ts" setup>
import type { KeypadKeyVM } from '../view-models';
import SvgIcon from '../assorted/SvgIcon.vue'

const { vm } = defineProps<{
  vm: KeypadKeyVM
}>()
</script>

<template>
  <button 
    :disabled="!vm.isEnabled"
    class="keypad-button" 
    :class="{ iconized: vm.icon !== undefined }"
  >
    <SvgIcon v-if="vm.icon" :icon="vm.icon"/>
    <span v-else class="h5">{{ vm.label }}</span>
  </button>
</template>

<style lang="scss" scoped>
@use '@/assets/design-tokens/palette';
@use '@/assets/theme';
@use '../assets/buttons';

button.keypad-button {
  border-radius: 0.5em;
  height: 3em;
  vertical-align: middle;
  width: 3em;
  @include palette.color-attributes((
    'background-color': theme.$key-background-color,
    'color': theme.$key-color
  ));
  
  &.iconized:enabled {
    @include palette.color-attributes((
    'background-color': theme.$key-color,
    'color': theme.$key-background-color
  ));
  }
  
  &:disabled {
    background-color: transparent;
  }
  
  .svg-icon {
    height: 2em;
    width: 2em;
  }
}
</style>
