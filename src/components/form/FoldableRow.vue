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
      <span class="serif" :class="{ h6: isUnfolded }">
        {{ title }}
      </span>
      <div class="spacer"></div>
      <SvgIcon class="accessory" :icon="isUnfolded ? Icon.ChevronUp : Icon.ChevronDown" />
    </div>
    <div v-if="isUnfolded" class="content foldable">
      <slot></slot>
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
