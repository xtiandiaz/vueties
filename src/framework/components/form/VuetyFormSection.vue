<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  footnote?: string
}>()
</script>

<template>
  <section>
    <div v-if="title || subtitle" class="header">
      <strong v-if="title">{{ title }}</strong>
      <span v-if="subtitle">{{ subtitle }}</span>
    </div>
    
    <div class="rows">
      <slot></slot>
    </div>
    
    <div v-if="footnote" class="footer">
      <span>{{ footnote }}</span>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use 'styles';
@use '@design-tokens/typography';
</style>
