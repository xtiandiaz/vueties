<script lang="ts" setup>
import type { KeypadKeyVM } from '../view-models';
import SvgIcon from '../misc/SvgIcon.vue'

const { vm } = defineProps<{
  vm: KeypadKeyVM
}>()
</script>

<template>
  <button :disabled="!vm.isEnabled" class="keypad-button" :class="{ iconized: vm.icon !== undefined }">
    <SvgIcon v-if="vm.icon" :icon="vm.icon" />
    <span v-else class="label h5" :class="{ dimmed: vm.isDimmed }">{{ vm.label }}</span>
  </button>
</template>

<style lang="scss" scoped>
@use '../styles/buttons';
@use '@/assets/varties';
@use '@design-tokens/palette';

button.keypad-button {
  border-radius: 0.5em;
  height: 3em;
  vertical-align: middle;
  width: 3em;
  @include palette.color-attributes(('background-color': varties.$key-background-color,
      'color': varties.$key-color ));

  &.iconized:enabled {
    @include palette.color-attributes(('background-color': varties.$key-color,
        'color': varties.$key-background-color ));
  }

  .label {
    &.dimmed {
      opacity: 25%;
    }
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
