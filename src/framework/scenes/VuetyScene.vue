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
      <div id="vs-router-view-component-wrapper">
        <component :is="Component" />
      </div>
      
      <ModalScene 
        @back="back"
        @push="push"
      />
  </RouterView>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;

#vs-router-view-component-wrapper {
  box-sizing: border-box;
  height: 100%;
  padding: env(safe-area-inset-top) 0 env(safe-area-inset-bottom) 0;
}
</style>
