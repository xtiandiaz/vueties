<script setup lang="ts" generic="Value">
import type { VuetyKeypadKey } from '../shared.vm';
import SvgIcon from '../misc/VuetySvgIcon.vue';

defineProps<{
  keys: VuetyKeypadKey<Value>[]
}>()

const emits = defineEmits<{
  input: [value: Value]
}>()
</script>

<template>
  <div class="vuety-keypad pad">
    <button 
      v-for="(_key, index) of keys" 
      :key="index" 
      :disabled="!(_key.isEnabled ?? true)" 
      :class="{ iconized: _key.icon !== undefined }"
      @click="emits('input', _key.value)"
    >
      <SvgIcon v-if="_key.icon" :icon="_key.icon" />
      <label v-else :class="['h4']">{{ _key.label }}</label>
    </button>
  </div>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use 'styles';
@use '../buttons/styles' as button-styles;

.vuety-keypad {
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
      @include vs.size(1.75rem);
    }
  }
}
</style>
