<script setup lang="ts">
import { Icon } from '@design-tokens/iconography'
import SvgIcon from '../misc/SvgIcon.vue';

defineProps<{
  title: string,
  isUnfolded: boolean,
  subtitle?: string
}>()

const emits = defineEmits<{
  selected: [void]
}>()
</script>

<template>
  <div class="row foldable">
    <div class="content fixed" @click="emits('selected')">
      <div class="title-subtitle">
        <div class="title-container">
          <span :class="{ h6: isUnfolded }">{{ title }}</span>
          <slot name="title-ornament"></slot>
        </div>
        <span v-if="subtitle" class="subtitle">{{ subtitle }}</span>
      </div>
      <div class="spacer"></div>
      <SvgIcon class="disclosure-indicator" :icon="isUnfolded ? Icon.ChevronUp : Icon.ChevronDown" />
    </div>
    <div v-if="isUnfolded" class="content foldable">
      <slot name="foldable-content"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/form';
@use '@design-tokens/palette';
@use '@design-tokens/typography';

.row.foldable {
  padding: 0 !important;
  display: block !important;

  div.content {
    align-items: center;
    display: flex;
    flex-direction: row;
    min-height: form.$row-min-height;
    padding: 0 form.$row-h-padding;

    &.fixed {
      gap: 1em;

      &:hover {
        cursor: pointer;
      }

      div.title-subtitle {
        padding: 0.75em 0;

        > * {
          display: block;
        }
        
        div.title-container {
          display: flex;
          flex-direction: row;
          gap: 0.5em;
        }

        span.subtitle {
          @extend .caption;
          margin: 0.25em 0 0 0;
          @include palette.color-attribute('color', 'secondary-body');
        }
      }
    }

    &.foldable {
      padding-bottom: 0.25em;
    }
  }
}
</style>
