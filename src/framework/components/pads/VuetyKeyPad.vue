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
      <label v-else :class="['h4', { dimmed: vm.isDimmed }]">{{ vm.label }}</label>
    </button>
  </div>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use 'styles';
@use '../buttons/styles' as button-styles;

.vuety-key-pad {
  button {
    border-radius: 0.5rem;
    vertical-align: middle;
    @include vs.size(3rem);
    @include vs.color-attributes((
      'background-color': vs.$keypad-key-background-color,
      'color': vs.$keypad-key-color
    ));
    
    &:disabled {
      background-color: transparent;
    }

    &.iconized:enabled {
      @include vs.color-attributes((
        'background-color': vs.$keypad-key-color,
        'color': vs.$keypad-key-background-color
      ));
    }

    label {      
      &.dimmed {
        opacity: 0.25;
      }
    }
    
    .svg-icon {
      @include vs.size(2rem);
    }
  }
}
</style>
