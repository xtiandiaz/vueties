<script setup lang="ts">
import { useRoute } from 'vue-router';
import { type VuetyNavigationBarVM } from '../components/bars/view-models'
import NavigationalView from '../views/VuetyNavigationalView.vue';
import ModalScene from './VuetyModalScene.vue';

defineProps<{
  navigationBarVM?: VuetyNavigationBarVM
}>()

const route = useRoute()
</script>

<template>
  <NavigationalView :navigationBarVM="navigationBarVM" :title="route.meta._title?.value">
    <RouterView v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
      
      <ModalScene />
    </RouterView> 
  </NavigationalView>
  
  <ModalScene />
</template>

<style scoped lang="scss">
@use '../styles/mixins';

.vuety-navigational-view {
  @include mixins.position(fixed, 0, 0, 0, 0)
}
</style>
