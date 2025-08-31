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
  <div class="vuety-info-form-row">
    <SvgIcon v-if="icon" :icon="icon" />
    
    <div class="title-subtitle-wrapper">
      <span class="title" v-html="title"></span>
      <span v-if="subtitle" class="subtitle">{{ subtitle }}</span>
    </div>
    
    <div class="flex-spacer"></div>
    
    <span v-if="value" class="value">{{ value }}</span>
  </div>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use '../styles';

.vuety-info-form-row {
  @extend %form-row;
  
  .svg-icon {
    min-width: 1.75rem;
  }
  
  .title-subtitle-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    padding: 0.5rem 0;
    
    .subtitle {
      @extend %caption;
    }
  }
  
  .value, .subtitle {
    @include vs.color-attribute('color', 'secondary-body');
  }
}
</style>
