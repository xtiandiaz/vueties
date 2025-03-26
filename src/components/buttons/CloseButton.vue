<script setup lang="ts">
import { Icon } from '@design-tokens/iconography';
import SvgIcon from '../misc/SvgIcon.vue';

</script>

<template>
  <button class="icon-button close-button">
    <span class="circle-fill" />
    <SvgIcon :icon="Icon.Xmark" />
  </button>
</template>

<style scoped lang="scss">
@use '@vueties/styles/buttons';
@use '@design-tokens/palette';

$fill-size: 2em;
$icon-size: 1.5em;

button.close-button {
  position: relative;
  
  .svg-icon {
    height: $icon-size;
    width: $icon-size;
    @include palette.color-attribute('color', 'body');
  }
  
  .circle-fill {
    border-radius: 50%;
    display: block;
    height: $fill-size;
    position: absolute;
    width: $fill-size;
    @include palette.color-attribute('background-color', 'body', 0.1);
  }
}
</style>
