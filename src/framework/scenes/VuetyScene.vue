<script setup lang="ts">
import ModalScene from './VuetyModalScene.vue';
</script>

<template>
  <RouterView name="default" v-slot="{ Component }">
      <component :is="Component" />
      
      <ModalScene />
  </RouterView>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;

.vuety-navigational-view {
  @include vs.position(fixed, 0, 0, 0, 0)
}
</style>
