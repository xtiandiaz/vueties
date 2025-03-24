<script setup lang="ts" generic="Value">
import { type FormOptionRowVM } from '../view-models';
import { Icon } from '@/assets/design-tokens/iconography'
import SvgIcon from '../assorted/SvgIcon.vue';

defineProps<{
  vm: FormOptionRowVM<Value>
}>()

const emits = defineEmits<{
  selected: [value: Value]
}>()
</script>

<template>
  <div class="row option" @click="emits('selected', vm.value)">
    <SvgIcon v-if="vm.icon" :icon="vm.icon" class="representative-icon"/>
    
    <span :class="{ strong: vm.isSelected }">{{ vm.title }}</span>
    
    <div class="spacer"></div>
    
    <SvgIcon v-if="vm.isSelected" :icon="Icon.Checkmark" />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/design-tokens/palette';
@use '@/assets/theme';
@use '../assets/form';

$icon-size: 1.5em;

.row.option {
  
  &:hover {
    cursor: pointer;
  }
  
  .svg-icon {
    height: $icon-size;
    width: $icon-size;
  }
}
</style>
