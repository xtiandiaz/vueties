<script setup lang="ts">
import { useRoute } from 'vue-router';
import { type VuetyNavigationBarVM } from '../components/bars/view-models'
import VuetyNavigationalView from '../views/VuetyNavigationalView.vue';
import VuetyModalScene from './VuetyModalScene.vue';

defineProps<{
  navigationBarVM?: VuetyNavigationBarVM
}>()

const route = useRoute()
</script>

<template>
  <VuetyNavigationalView :navigationBarVM="navigationBarVM" :title="route.meta.title?.value">
    <RouterView />
  </VuetyNavigationalView>
  
  <VuetyModalScene />
</template>

<style scoped lang="scss">
@use '../styles/mixins';

.vuety-navigational-view {
  @include mixins.position(fixed, 0, 0, 0, 0)
}
</style>
