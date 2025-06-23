<script setup lang="ts">
import { Icon } from '@design-tokens/iconography'

const { title } = defineProps<{
  title: string,
  icon?: Icon,
  subtitle?: string,
  value?: string,
}>()
</script>

<template>
  <div class="row info">    
    <div class="title-subtitle-wrapper">
      <span class="title">{{ title }}</span>
      <span v-if="subtitle" class="subtitle">{{ subtitle }}</span>
    </div>
    
    <div class="spacer"></div>
    
    <span v-if="value" class="value">{{ value }}</span>
    <slot v-if="!value" name="custom-value"></slot>
  </div>
</template>

<style lang="scss">
@use '../styles';
@use '@design-tokens/palette';
@use '@design-tokens/typography';

.row.info {
  .title-subtitle-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    padding: 0.75em 0;
    
    .subtitle {
      @extend .caption;
    }
  }
  
  .value, .subtitle {
    @include palette.color-attribute('color', 'secondary-body');
  }
}
</style>
