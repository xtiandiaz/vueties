<script setup lang="ts">
import { Icon } from '@/assets/design-tokens/iconography'
import IconButton from '@/components/buttons/IconButton.vue'
</script>

<template>
  <header>
  </header>

  <main>
    <section>
      <IconButton :icon="Icon.Wand" />
      <IconButton :icon="Icon.Gamepad" :label="'2'" />
      <IconButton :icon="Icon.Trash" />
    </section>
  </main>
</template>

<style scoped lang="scss"></style>
