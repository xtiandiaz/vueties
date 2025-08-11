<script setup lang="ts">
import { ref, watch } from 'vue'
import VuetyIconButton from '../buttons/VuetyIconButton.vue';
import type { Range } from '@/assets/tungsten/math'
import { clampInRange } from '@/assets/tungsten/math';
import { Icon } from '@/assets/design-tokens/iconography';

const { initialValue, range, step } = defineProps<{
  initialValue: number
  range: Range
  step: number
  
  suffix?: string
}>()

const emits = defineEmits<{
  setValue: [value: number]
}>()

const value = ref(clampInRange(initialValue, range))

enum Direction { Down = -1, Up = 1 }
function doStep(direction: Direction) {
  value.value = clampInRange(value.value + direction * step, range)
}

watch(value, (newValue) => {
  emits('setValue', newValue)
})
</script>

<template>
  <div class="vuety-stepper">
    <VuetyIconButton 
      :class="{ disabled: value <= range.min }"
      :icon="Icon.MinusCircleFilled" 
      @click="doStep(Direction.Down)"
    />
    <strong>{{ value }}<span v-if="suffix">{{ suffix }}</span></strong>
    <VuetyIconButton 
      :class="{ disabled: value >= range.max }"
      :icon="Icon.PlusCircleFilled" 
      @click="doStep(Direction.Up)"
    />
  </div>
</template>

<style scoped lang="scss">
.vuety-stepper {
  align-items: center;
  display: inline-flex;
  gap: 0.25rem;
}
</style>
