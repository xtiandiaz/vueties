<script setup lang="ts">
import VuetySvgIcon from '../misc/VuetySvgIcon.vue';
import type { Icon } from '@design-tokens/iconography';

defineProps<{
  label: string
  icon?: Icon
}>()
</script>

<template>
  <button type="button" class="text-button">
    <label class="strong">
      <VuetySvgIcon v-if="icon" :icon="icon" />
      <span>{{ label }}</span>
    </label>
  </button>
</template>

<style scoped lang="scss">
@use 'styles';
@use '../form/styles' as form-styles;
@use '@/assets/varties';
@use '@design-tokens/palette';
@use '@design-tokens/typography';

button.text-button {
  border-radius: 2em;
  color: white;
  min-height: form-styles.$row-min-height;
  padding: 0 1.25em;
  @include palette.color-attributes((
    'background-color': 'background',
    'color': varties.$tint-color
  ));

  label {
    align-items: center;
    display: flex;
    gap: 0.5em;
    
    .svg-icon {
      width: 1.5em;
    }
  }
}
</style>
