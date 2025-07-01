<script setup lang="ts">
import { useRouter } from 'vue-router'
import SvgIcon from '../../misc/VuetySvgIcon.vue'
import { Icon } from '@design-tokens/iconography'

defineProps<{
  title: string,
  path: string,
  emoji?: string,
  icon?: Icon
  subtitle?: string,
}>()

const router = useRouter()
</script>

<template>
  <div 
    class="row push"
    @click="router.push(path)"
  >
    <SvgIcon v-if="icon" :icon="icon" />
    <h5 v-else-if="emoji">{{ emoji }}</h5>
    
    <div class="title-subtitle-wrapper">
      <span class="title">{{ title }}</span>
      <span v-if="subtitle" class="subtitle">{{ subtitle }}</span>
    </div>
    
    <div class="spacer"></div>
    
    <SvgIcon class="disclosure-indicator" :icon="Icon.ChevronRight" />
  </div>
</template>

<style lang="scss">
@use '../styles';
@use '@design-tokens/palette';
@use '@design-tokens/typography';

.row.push {
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
