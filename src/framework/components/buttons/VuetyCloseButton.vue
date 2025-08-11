<script setup lang="ts">
import { Icon } from '@design-tokens/iconography';
import SvgIcon from '../misc/VuetySvgIcon.vue';

</script>

<template>
  <button type="button" class="vuety-close-button">
    <div class="circle-fill"></div>
    <SvgIcon :icon="Icon.Xmark" />
  </button>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use 'styles';

.vuety-close-button {
  @extend %vuety-icon-button;
  
  position: relative;
  
  .svg-icon {
    @include vs.size(1.5em);
    @include vs.color-attribute('color', vs.$tertiary-body-color);
  }
  
  .circle-fill {
    border-radius: 50%;
    position: absolute;
    @include vs.size(2em);
    @include vs.color-attribute('background-color', vs.$body-color 0.1);
  }
}
</style>
