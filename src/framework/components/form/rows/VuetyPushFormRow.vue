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
  value?: number | string
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
      <span v-if="subtitle" class="subtitle caption">{{ subtitle }}</span>
    </div>
    
    <div class="flex-spacer"></div>
    
    <span class="disclosure-wrapper">
      <span v-if="value" class="value">{{ value }}</span>
      <SvgIcon class="disclosure-indicator" :icon="Icon.ChevronRight" />
    </span>
  </div>
</template>

<style lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use '../styles';

.row.push {
  .emoji {
    margin: 0;
    line-height: 1;
  }
  
  .title-subtitle-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    padding: 0.75em 0;
  }
  
  .subtitle {
    @include vs.color-attribute('color', vs.$secondary-body-color);
  }
  
  .value {
    font-size: 0.95em;
    white-space: nowrap;
    @include vs.color-attribute('color', vs.$tertiary-body-color);
  }
}
</style>
