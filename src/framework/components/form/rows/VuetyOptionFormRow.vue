<script setup lang="ts" generic="Value">
import { type VuetyFormOptionRowVM } from '../view-models';
import { Icon } from '@design-tokens/iconography'
import SvgIcon from '../../misc/VuetySvgIcon.vue';

defineProps<{
  vm: VuetyFormOptionRowVM<Value>
}>()

const emits = defineEmits<{
  selected: [value: Value]
}>()
</script>

<template>
  <div 
    class="row option" :class="{ selected: vm.isSelected }"
    @click="emits('selected', vm.value)"
  >
    
    <SvgIcon v-if="vm.icon" :icon="vm.icon" class="representative-icon" />
    <span class="title" :class="{ selected: vm.isSelected }">{{ vm.title }}</span>

    <div class="spacer"></div>

    <SvgIcon v-if="vm.isSelected" :icon="Icon.Checkmark" />
  </div>
</template>

<style scoped lang="scss">
@use '../styles';
@use '@design-tokens/palette';
@use '@design-tokens/typography';

.row.option {
  &:hover {
    cursor: pointer;
  }
  
  &.selected {
    .title {
      @extend strong;
    }
    .title, .representative-icon {
      @include palette.color-attribute('color', 'body');
    }  
  }
  
  .title {
    @include palette.color-attribute('color', 'secondary-body');
  }
  .representative-icon {
    @include palette.color-attribute('color', 'tertiary-body');
  }
}
</style>
