<script setup lang="ts">
import { Icon } from '@design-tokens/iconography';
import SvgIcon from '../misc/VuetySvgIcon.vue';

</script>

<template>
  <button type="button" class="vuety-close-button">
    <span class="circle-fill"></span>
    <SvgIcon :icon="Icon.Xmark" />
  </button>
</template>

<style scoped lang="scss">
@use 'styles';
@use '../../styles/mixins';
@use '@design-tokens/palette';

button.vuety-close-button {
  @extend .vuety-icon-button;
  position: relative;
  
  .svg-icon {
    @include mixins.size(1.5em);
    @include palette.color-attribute('color', 'tertiary-body');
  }
  
  .circle-fill {
    border-radius: 50%;
    display: block;
    position: absolute;
    @include mixins.size(2em);
    @include palette.color-attribute('background-color', 'body', 0.1);
  }
}
</style>
