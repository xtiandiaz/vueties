<script setup lang="ts">
import SvgIcon from '../../misc/VuetySvgIcon.vue'
import type { Icon } from '@design-tokens/iconography'

const { title } = defineProps<{
  title: string,
  icon?: Icon,
  subtitle?: string,
  value?: number | string
}>()
</script>

<template>
  <div class="row info">
    <SvgIcon v-if="icon" :icon="icon" />
    
    <div class="title-subtitle-wrapper">
      <span class="title">{{ title }}</span>
      <span v-if="subtitle" class="subtitle">{{ subtitle }}</span>
    </div>
    
    <div class="spacer"></div>
    
    <span v-if="value" class="value">{{ value }}</span>
  </div>
</template>

<style scoped lang="scss">
@use '../styles';
@use '@design-tokens/palette';
@use '@design-tokens/typography';

.row.info {
  .title-subtitle-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.125em;
    padding: 0.5em 0;
    
    .subtitle {
      @extend .caption;
    }
  }
  
  .value, .subtitle {
    @include palette.color-attribute('color', 'secondary-body');
  }
  
  .svg-icon {
    min-width: 1.75em;
  }
}
</style>
