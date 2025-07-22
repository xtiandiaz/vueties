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
@use '../../styles/mixins';
@use '@design-tokens/typography';
@use '@design-tokens/palette';

.large-title {
  align-items: center;
  display: flex;
  gap: 0.625em;
  margin: 0 0 0.5em 1em;
  @include palette.color-attribute('color', 'secondary-body');
  
  .title-subtitle-wrapper {
    display: inline-flex;
    flex-direction: column;
  }
  
  .title {
    margin: 0;
  }
  
  .svg-icon {
    @include mixins.size(1.5em);
    @include palette.color-attribute('color', 'tertiary-body');
  }
}
</style>
