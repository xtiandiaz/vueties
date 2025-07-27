<script setup lang="ts" generic="Key">
import type { VuetySegmentedButtonSegment } from '../../buttons/view-models';
import SegmentedButton from '../../buttons/VuetySegmentedButton.vue';

defineProps<{
  choice: Key
  segments: VuetySegmentedButtonSegment<Key>[]
}>()

const emits = defineEmits<{
  select: [key: Key]
}>()
</script>

<template>
  <div class="vuety-segmented-button-form-row">    
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
  @extend %form-row;
   
  .representative-icon {
    @include vs.color-attribute('color', vs.$tertiary-body-color);
  }
}
</style>
