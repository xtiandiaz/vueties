<script setup lang="ts">
import { ColorKey } from './components/assets/design-tokens/palette'
import { IconKey } from './components/assets/design-tokens/iconography'
import IconButton from '@/components/IconButton.vue'
</script>

<template>
  <header>
  </header>

  <main>
    <section>
      <IconButton :icon-key="IconKey.Wand" :color-key="ColorKey.Yellow" />
      <IconButton :icon-key="IconKey.Gamepad" :color-key="ColorKey.Blue" :annotation="'2'" />
      <IconButton :icon-key="IconKey.Trash" :color-key="ColorKey.Red" />
    </section>
  </main>
</template>

<style scoped lang="scss"></style>
