<script setup lang="ts" generic="Result">
import { ref } from 'vue'
import ProgressIndicator from '../components/misc/VuetyProgressIndicator.vue';
import Form from '../components/form/VuetyForm.vue'
import Section from '../components/form/VuetyFormSection.vue'
import VuetyTextInputFormRow from '../components/form/rows/VuetyTextInputFormRow.vue';

defineProps<{
  placeholder: string
  input?: string
}>()

const isSearching = ref(false)
</script>

<template>
  <Form>
    <Section id="search-input-section">
      <VuetyTextInputFormRow id="search-input-row" :placeholder="placeholder" />
    </Section>
    
    <Section
      v-if="input"
      :title="`Results for... &quot${input}&quot`"
    >
      <slot></slot>
    </Section>
    
    <ProgressIndicator v-if="isSearching" />
  </Form>
</template>

<style scoped lang="scss">
@use '../components/form/styles';
@use '../components/bars/styles' as bar-styles;

#search-input-section {
  position: sticky;
}

.progress-indicator {
  width: 2.5em;
  margin: 0 auto;
}
</style>
