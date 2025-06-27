<script setup lang="ts" generic="Result">
import { ref, watch } from 'vue'
import Form from '../components/form/VuetyForm.vue'
import Section from '../components/form/VuetyFormSection.vue'
import SearchInputRow from '../components/form/rows/VuetySearchInputFormRow.vue';
import { Icon } from '@design-tokens/iconography'
import { cancellableDelay } from '@/assets/tungsten/promises'
import '@/assets/tungsten/extensions/string.extensions'

const { search } = defineProps<{
  placeholder: string,
  search: (input: string) => Result[] | undefined
}>()

const input = ref('')
const results = ref<Result[]>()
const isSearching = ref(false)
const searchCancellable = ref<() => void>()

function onInput(textInput: string) {
  input.value = textInput.removeLeadingAndTrailingSpaces()
}

function clearSearch() {
  searchCancellable.value?.()
  isSearching.value = false
  results.value = undefined
}

async function performSearch(_input: string) {
  clearSearch()
  
  const { delay, cancellable } = cancellableDelay(500)
  searchCancellable.value = cancellable
  isSearching.value = true
  
  try {
    await delay
    results.value = await search(_input)
    isSearching.value = false
  } catch {
    // console.log('cancelled: ', _input)
  }
}

watch(input, async (value, oldValue) => {
  if (!value || value === oldValue) {
    clearSearch()
    return
  }
  
  await performSearch(value)
})
</script>

<template>
  <Form class="vuety-search-view">
    <Section class="vsv-input-section">
      <SearchInputRow 
        class="vsv-input-row"
        :placeholder="placeholder" 
        :placeholderIcon="Icon.MagnifyingGlass"
        :isSearching="isSearching"
        :shouldFocusOnMounted="true"
        @input="onInput"
      />
    </Section>
    
    <slot 
      v-if="results && results.length > 0" 
      name="results" 
      :results="results" 
      :input="input"
    ></slot>
    
    <slot v-else-if="isSearching" name="searching" :input="input"></slot>
    
    <slot v-else name="no-results" :input="input"></slot>
  </Form>
</template>

<style scoped lang="scss">
</style>
