<script lang="ts" setup>
import { computed } from 'vue'
import type { IKeypadKeyVM } from '../view-models';
import { enumKey } from '@/assets/tungsten/misc'
import { Icon } from '@/assets/design-tokens/iconography'
import SvgIcon from '../assorted/SvgIcon.vue'

const { keypadKey } = defineProps<{
  keypadKey: IKeypadKeyVM,
}>()

const icon = computed(() => enumKey(Icon, keypadKey.label))
</script>

<template>
  <button class="keypad-button" :class="{ iconized: icon !== undefined }">
    <SvgIcon v-if="icon" :icon="icon"/>
    <span v-else class="h5">{{ keypadKey.label }}</span>
  </button>
</template>

<style lang="scss" scoped>
@use '@/assets/design-tokens/palette';
@use '@/assets/theme';

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
