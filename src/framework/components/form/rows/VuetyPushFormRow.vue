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
  value?: string | number
}>()

const router = useRouter()
</script>

<template>
  <div 
    class="row push discloser"
    @click="router.push(path)"
  >
    <SvgIcon v-if="icon" :icon="icon" />
    <h4 v-else-if="emoji" class="emoji">{{ emoji }}</h4>
    
    <div class="title-subtitle-wrapper">
      <span class="title">{{ title }}</span>
      <span v-if="subtitle" class="subtitle">{{ subtitle }}</span>
    </div>
    
    <div class="spacer"></div>
    
    <span v-if="value" class="value">{{ value }}</span>
    
    <SvgIcon class="disclosure-indicator" :icon="Icon.ChevronRight" />
  </div>
</template>

<style lang="scss">
@use '../styles';
@use '@design-tokens/palette';
@use '@design-tokens/typography';

.row.push {
  .emoji {
    margin: 0;  
  }
  
  .title-subtitle-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    padding: 0.75em 0;
    
    .subtitle {
      @extend .caption;
    }
  }
  
  .subtitle {
    @include palette.color-attribute('color', 'secondary-body');
  }
  
  .value {
    @include palette.color-attribute('color', 'tertiary-body');
  }
}
</style>
