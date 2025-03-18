<script setup lang="ts">
import { ColorKey } from '@/assets/design-tokens/palette'
import { Icon } from '@/assets/design-tokens/iconography'
import IconButton from '@/components/IconButton.vue'
</script>

<template>
  <header>
  </header>

  <main>
    <section>
      <IconButton :icon-key="Icon.Wand" :color-key="ColorKey.Yellow" />
      <IconButton :icon-key="Icon.Gamepad" :color-key="ColorKey.Blue" :annotation="'2'" />
      <IconButton :icon-key="Icon.Trash" :color-key="ColorKey.Red" />
    </section>
  </main>
</template>

<style scoped lang="scss"></style>
