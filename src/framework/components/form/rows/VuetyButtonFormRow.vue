<script setup lang="ts">
import { Icon } from '@design-tokens/iconography';
import SvgIcon from '../../misc/VuetySvgIcon.vue';

defineProps<{
  label: string,
  icon?: Icon,
  isDestructive?: boolean
}>()
</script>

<template>
  <div class="row button" :class="{ destructive: isDestructive ?? false }">
    <SvgIcon v-if="icon" :icon="icon" />
    <label>{{ label }}</label>
  </div>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use '../styles';

$icon-size: 1.5em;

.row.button {
  gap: 0.5em !important;
  justify-content: center;
  @include vs.strong();
  @include vs.color-attribute('color', vs.$tint-color);
  
  &.destructive {
    @include vs.color-attribute('color', 'red');
  }

  &:not(:disabled, .disabled) {
    &:hover, label:hover {
      cursor: pointer;
    }
  }

  .svg-icon {
    height: $icon-size;
    width: $icon-size;
  }
}
</style>
