<script setup lang="ts" generic="Key">
import type { VuetySegmentedButtonSegment } from '../../buttons/view-models';
import SegmentedButton from '../../buttons/VuetySegmentedButton.vue';
import SvgIcon from '../../misc/VuetySvgIcon.vue';
import { Icon } from '@design-tokens/iconography';

defineProps<{
  choice: Key
  segments: VuetySegmentedButtonSegment<Key>[]
  icon?: Icon,
  title?: string
}>()

const emits = defineEmits<{
  select: [key: Key]
}>()
</script>

<template>
  <div class="vuety-segmented-button-form-row row">
    <SvgIcon v-if="icon" class="representative-icon" :icon="icon" />
    
    <span v-if="title" class="title">{{ title }}:</span>
    
    <SegmentedButton 
      :choice="choice" 
      :segments="segments" 
      @select="(key) => emits('select', key)"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use '../styles';

.vuety-segmented-button-form-row { 
  :deep(.background) {
    @include vs.color-attribute('background-color', vs.$secondary-background-color);
  }
   
  .representative-icon {
    @include vs.color-attribute('color', vs.$tertiary-body-color);
  }
}
</style>
