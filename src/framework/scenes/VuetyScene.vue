<script setup lang="ts">
import { useRouter } from 'vue-router';
import ModalScene from './VuetyModalScene.vue';

const router = useRouter()

function back() {
  router.back()
}

function push(path: string) {
  router.push(path)
}
</script>

<template>
  <RouterView 
    name="default" 
    v-slot="{ Component }"
    @back="back"
    @push="push"
  >
      <component :is="Component" />
      
      <ModalScene 
        @back="back"
        @push="push"
      />
  </RouterView>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;

.vuety-navigational-view {
  @include vs.position(fixed, 0, 0, 0, 0)
}
</style>
