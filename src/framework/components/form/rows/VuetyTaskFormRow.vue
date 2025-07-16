<script setup lang="ts">
import { ref } from 'vue'
import IconButton from '../../buttons/VuetyIconButton.vue';
import { Icon } from '@design-tokens/iconography'

const props = defineProps<{
  isDone?: boolean
}>()

const isDone = ref(props.isDone === true)
</script>

<template>
  <div :class="['vuety-form-row row task', isDone ? 'done' : '']">
    <IconButton 
      :icon="isDone ? Icon.RadioCircleFilled : Icon.RadioCircle" 
      @click="isDone = !isDone"
    />
    
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles';
@use '@/assets/varties';
@use '@design-tokens/palette';
@use '@design-tokens/typography';

form .row.task {
  align-items: start;
  gap: 0.25em;
  padding: 0.125em styles.$row-h-padding 0.125em 0.375em;
  
  &.done {
    opacity: 0.85;
    
    .content {
      opacity: 0.5;
    }
    
    :deep(.vuety-icon-button .svg-icon) {
      @include palette.color-attribute('color', 'body');
    }
  }
  
  :deep(.vuety-icon-button .svg-icon) {
    @include palette.color-attribute('color', 'accessory');
  }
  
  .content {
    align-self: center;
    padding: 0.5em 0;
  }
}
</style>
