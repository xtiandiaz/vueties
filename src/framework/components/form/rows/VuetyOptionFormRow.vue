<script setup lang="ts" generic="Value">
import { Icon } from '@design-tokens/iconography'
import SvgIcon from '../../misc/VuetySvgIcon.vue';

defineProps<{
  isSelected: boolean
  title: string
  value: Value
  
  icon?: Icon
}>()

const emits = defineEmits<{
  select: [value: Value]
}>()
</script>

<template>
  <div 
    class="vuety-option-form-row" :class="{ selected: isSelected }"
    @click="emits('select', value)"
  >
    <SvgIcon v-if="icon" :icon="icon" class="representative-icon" />
    <span class="title" :class="{ selected: isSelected }">{{ title }}</span>

    <div class="flex-spacer"></div>

    <SvgIcon v-if="isSelected" :icon="Icon.Checkmark" class="representative-icon" />
  </div>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use '../styles';

.vuety-option-form-row {
  @extend %form-row;
  
  &:hover {
    cursor: pointer;
  }
  
  &.selected {
    .title {
      @extend %strong;
    }
    .title, .representative-icon {
      @include vs.color-attribute('color', vs.$body-color);
    }  
  }
  
  .title {
    @include vs.color-attribute('color', vs.$secondary-body-color);
  }
  .representative-icon {
    @include vs.color-attribute('color', vs.$tertiary-body-color);
  }
}
</style>
