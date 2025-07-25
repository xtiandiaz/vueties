<script lang="ts" setup>
import SvgIcon from '../misc/VuetySvgIcon.vue';
import type { VuetyKeypadKeyVM } from './view-models'

defineProps<{
  keyVMs: VuetyKeypadKeyVM[]
}>()

const emits = defineEmits<{
  input: [value: number | string]
}>()
</script>

<template>
  <div class="pad vuety-key-pad">
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
@use '../../utils/vuetystrap';
@use 'styles';
@use '../buttons/styles' as button-styles;


.vuety-key-pad {
  button {
    border-radius: 0.5em;
    height: 3em;
    vertical-align: middle;
    width: 3em;
    @include palette.color-attributes((
      'background-color': vuetystrap.$key-background-color,
      'color': vuetystrap.$key-color
    ));
    
    &:disabled {
      background-color: transparent;
    }

    &.iconized:enabled {
      @include palette.color-attributes((
        'background-color': vuetystrap.$keypad-key-color,
        'color': vuetystrap.$keypad-background-color
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
