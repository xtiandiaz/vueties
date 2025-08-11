<script setup lang="ts">
import SvgIcon from '../misc/VuetySvgIcon.vue';
import type { Icon } from '@design-tokens/iconography';

defineProps<{
  icon?: Icon
  title?: string
  footnote?: string
  showsLargeTitle?: boolean
  subtitle?: string
}>()
</script>

<template>
  <section class="vuety-form-section">
    <div v-if="showsLargeTitle && title" class="large-title">
      <SvgIcon v-if="icon" :icon="icon" />
      
      <div class="title-subtitle-wrapper">
        <h6 class="title">{{ title }}</h6>
        <span v-if="subtitle">{{ subtitle }}</span>
      </div>
    </div>
    
    <div v-if="!showsLargeTitle && (title || subtitle)" class="header">
      <div class="title-icon-wrapper">
        <SvgIcon v-if="icon" :icon="icon" />
        <span v-if="title" class="title">{{ title }}</span>
      </div>
      <span v-if="subtitle">{{ subtitle }}</span>
    </div>
    
    <div class="rows">
      <slot></slot>
    </div>
    
    <div v-if="footnote" class="footer">
      <span>{{ footnote }}</span>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use 'styles';

.vuety-form-section {
  @extend %form-section;
  
  .large-title {
    align-items: center;
    display: flex;
    gap: 0.625rem;
    margin: 0 0 0.25em 1.25rem;
    @include vs.color-attribute('color', vs.$secondary-body-color);
    
    .title-subtitle-wrapper {
      display: inline-flex;
      flex-direction: column;
    }
    
    .title {
      margin: 0;
    }
    
    .svg-icon {
      @include vs.size(1.75rem);
      @include vs.color-attribute('color', vs.$secondary-body-color);
    }
  }
  
  .header {
    .title-icon-wrapper {
      align-items: center;
      display: flex;
      gap: 0.375rem;
      
      > * {
        display: inline-block;
      }
      
      .svg-icon {
        @include vs.size(1.25rem);
      }
    }
  }
}
</style>
