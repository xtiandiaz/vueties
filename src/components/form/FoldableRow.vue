<script setup lang="ts">
import { Icon } from '@/assets/design-tokens/iconography'
import SvgIcon from '../assorted/SvgIcon.vue';

defineProps<{
  title: string,
  isUnfolded: boolean
}>()

const emits = defineEmits<{
  selected: [void]
}>()
</script>

<template>
  <div class="row clickable foldable">
    <div class="content fixed" @click="emits('selected')">
      <span :class="{ h6: isUnfolded }">{{ title }}</span>
      <slot name="title-ornament"></slot>
      <div class="spacer"></div>
      <SvgIcon class="accessory" :icon="isUnfolded ? Icon.ChevronUp : Icon.ChevronDown" />
    </div>
    <div v-if="isUnfolded" class="content foldable">
      <slot name="foldable-content"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/form';

.row.foldable {
  padding: 0 !important;
  display: block !important;
  
  div.content {
    align-items: center;
    display: flex;
    flex-direction: row;
    min-height: form.$row-min-height;
    padding: 0 form.$row-side-padding;
    
    &.fixed {
      gap: 1em;
      
      &:hover {
        cursor: pointer;
      }
    }
    &.foldable {
      padding-bottom: 0.25em;
    }
  }
}
</style>
