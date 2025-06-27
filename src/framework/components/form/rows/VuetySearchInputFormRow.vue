<script setup lang="ts">
import { onMounted, ref, useTemplateRef, watch } from 'vue'
import IconButton from '../../buttons/VuetyIconButton.vue';
import SvgIcon from '../../misc/VuetySvgIcon.vue';
import ProgressIndicator from '../../misc/VuetyProgressIndicator.vue';
import { Icon } from '@design-tokens/iconography';
import { delay } from '@/assets/tungsten/promises';

defineProps<{
  placeholder: string
  isSearching: boolean
  focusKey?: string
}>()

const emits = defineEmits<{
  input: [string]
}>()

const textInputRef = useTemplateRef('textInput')
const input = ref<string>()

function focus() {
  textInputRef.value?.focus()
}

function clear() {
  input.value = undefined
  focus()
}

watch(input, (value) => {
  emits('input', value ?? '')
})

onMounted(async () => {
  await delay(500)
  focus()
})
</script>

<template>
  <div class="row text-input">
    <span id="placeholder-icon-indicator-wrapper">
      <SvgIcon 
        v-if="!isSearching"
        :icon="Icon.MagnifyingGlass" 
        @click="focus"
      />
      <ProgressIndicator v-else />
    </span>
    
    <input 
      type="text" 
      ref="textInput"
      v-model="input"
      :placeholder="placeholder"
    >
    
    <IconButton 
      v-if="input && input.length > 0"
      :icon="Icon.Xmark" 
      class="auxiliary" 
      @click="clear"
    />
  </div>
</template>

<style scoped lang="scss">
@use '../styles';
@use '@design-tokens/palette';

#placeholder-icon-indicator-wrapper {
  display: inline-block;
  padding: 0 0.5em 0 0.75em;
  @include palette.color-attribute('color', 'accessory');
  
  > * {
    width: 1.5em;
  }
  
  .progress-indicator {
    @include palette.color-attribute('color', 'secondary-body');
  }
}
</style>
