<script lang="ts" setup>
import type { KeypadKeyVM } from '@vueties/view-models';
import SvgIcon from '@vueties/misc/SvgIcon.vue'

const { vm } = defineProps<{
  vm: KeypadKeyVM
}>()
</script>

<template>
  <button :disabled="!vm.isEnabled" class="keypad-button" :class="{ iconized: vm.icon !== undefined }">
    <SvgIcon v-if="vm.icon" :icon="vm.icon" />
    <span v-else class="label h5" :class="{ dimmed: vm.label === '＿' }">{{ vm.label }}</span>
  </button>
</template>

<style lang="scss" scoped>
@use '@vueties/styles/buttons';
@use '@/assets/theme';
@use '@/assets/design-tokens/palette';

button.keypad-button {
  border-radius: 0.5em;
  height: 3em;
  vertical-align: middle;
  width: 3em;
  @include palette.color-attributes(('background-color': theme.$key-background-color,
      'color': theme.$key-color ));

  &.iconized:enabled {
    @include palette.color-attributes(('background-color': theme.$key-color,
        'color': theme.$key-background-color ));
  }

  .label {
    &.dimmed {
      opacity: 50%;
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
