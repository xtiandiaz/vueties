<script setup lang="ts">
import { Icon } from '@design-tokens/iconography'
import SvgIcon from '../misc/SvgIcon.vue';

defineProps<{
  progress: number,
  iconFrom?: Icon,
  iconTo?: Icon
}>()
</script>

<template>
  <div class="progress-bar">
    <SvgIcon v-if="iconFrom" :icon="iconFrom" />
    
    <div class="bar">
      <span class="track"></span>
      <span class="fill" :style="{ width: `${progress * 100}%` }"></span>
    </div>
    
    <SvgIcon v-if="iconTo" :icon="iconTo" />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/theme';
@use '@design-tokens/palette';

$bar-height: 6px;
$icon-size: 1.5em;

div.progress-bar {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  min-height: $bar-height;
  
  div.bar {
    height: $bar-height;
    flex: auto;
    position: relative;
    
    > * {
      display: block;
    }
    
    .track, .fill {
      border-radius: calc($bar-height / 2);
      bottom: 0;
      left: 0;
      position: absolute;
      top: 0;
    }
    
    .track {
      right: 0;
      @include palette.color-attribute('background-color', 'body', 0.1);
    }
    
    .fill {
      min-width: $bar-height;
      transition: width 0.25s ease-out;
      @include palette.color-attribute('background-color', theme.$tint-color);
    }
  }
  
  .svg-icon {
    height: $icon-size;
    width: $icon-size;
  }
}
</style>
