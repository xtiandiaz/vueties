<script setup lang="ts">
</script>

<template>
  <div class="row custom">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use '../styles';

.row.custom {
  .content-wrapper {
    width: 100%;
  }
}
</style>
