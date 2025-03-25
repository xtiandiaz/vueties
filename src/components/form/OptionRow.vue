<script setup lang="ts" generic="Value">
import { type FormOptionRowVM } from '@vueties/view-models';
import { Icon } from '@/assets/design-tokens/iconography'
import SvgIcon from '@vueties/misc/SvgIcon.vue';

defineProps<{
  vm: FormOptionRowVM<Value>
}>()

const emits = defineEmits<{
  selected: [value: Value]
}>()
</script>

<template>
  <div class="row option" @click="emits('selected', vm.value)">
    <SvgIcon v-if="vm.icon" :icon="vm.icon" class="representative-icon" />

    <span :class="{ strong: vm.isSelected }">{{ vm.title }}</span>

    <div class="spacer"></div>

    <SvgIcon v-if="vm.isSelected" :icon="Icon.Checkmark" />
  </div>
</template>

<style scoped lang="scss">
@use '@vueties/styles/form';
@use '@/assets/theme';
@use '@/assets/design-tokens/palette';

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
