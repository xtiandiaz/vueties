<script setup lang="ts">
import { Icon } from '@design-tokens/iconography'
import SvgIcon from '../../misc/VuetySvgIcon.vue';

defineProps<{
  isUnfolded: boolean,
}>()

const emits = defineEmits<{
  selected: [void]
}>()
</script>

<template>
  <div class="row foldable" :class="{ unfolded: isUnfolded }">
    <div class="content fixed" @click="emits('selected')">
      <div id="title-subtitle-wrapper">
        <slot name="title"></slot>
        <slot name="subtitle"></slot>
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
@use '../styles';
@use '@design-tokens/palette';
@use '@design-tokens/typography';

.row.foldable {
  padding: 0 !important;
  display: block !important;

  .content {
    align-items: center;
    display: flex;
    flex-direction: row;
    min-height: styles.$row-min-height;
    padding: 0 styles.$row-h-padding;

    &.fixed {
      gap: 1em;

      &:hover {
        cursor: pointer;
      }

      #title-subtitle-wrapper {
        display: flex;
        flex-direction: column;
        gap: 0.25em;
        padding: 0.5em 0;
      }
    }

    &.foldable {
      padding-bottom: 0.25em;
    }
  }
}
</style>
