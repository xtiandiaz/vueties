<script setup lang="ts" generic="Value">
import { type FormChoiceSectionVM } from '../view-models'
import OptionRow from '../form/OptionRow.vue'

defineProps<{
  vm: FormChoiceSectionVM<Value>
}>()

const emits = defineEmits<{
  selected: [value: Value]
}>()
</script>

<template>
  <div class="section choice">
    <div v-if="vm.title || vm.subtitle" class="header">
      <span v-if="vm.title" class="title">{{ vm.title }}</span>
      <span v-if="vm.subtitle" class="subtitle">{{ vm.subtitle }}</span>
    </div>
    <div class="rows">
      <OptionRow v-for="(rowVm, index) in vm.rowVMs" :key="index" :vm="rowVm"
        @selected="(value) => emits('selected', value)" />
    </div>
    <div v-if="vm.footnote" class="footer">{{ vm.footnote }}</div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/form';
</style>
