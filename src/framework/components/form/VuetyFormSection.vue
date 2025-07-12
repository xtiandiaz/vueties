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
      <h6>{{ title }}</h6>
    </div>
    
    <div v-if="(title && !showsLargeTitle) || subtitle" class="header">
      <strong v-if="title">{{ title }}</strong>
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
@use 'styles';
@use '@design-tokens/typography';
@use '@design-tokens/palette';

.large-title {
  display: flex;
  gap: 0.5em;
  justify-items: center;
  margin: 0 0 0.5em 1em;
  @include palette.color-attribute('color', 'secondary-body');
  
  h6 {
    margin: 0;
  }
  
  .svg-icon {
    width: 1.5em;
  }
}
</style>
