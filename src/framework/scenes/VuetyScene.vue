<script setup lang="ts">
import { useRouter } from 'vue-router'
import NavigationalView from '../views/VuetyNavigationalView.vue';
import ModalScene from './VuetyModalScene.vue';
import { useNavigationStore } from '../stores/navigation.store';

const router = useRouter()
const navigation = useNavigationStore()
</script>

<template>
  <RouterView name="default" v-slot="{ Component, route }">
    <NavigationalView 
      :backPath="route.meta._navOptions.value.backPath"
      :closePath="route.meta._navOptions.value.closePath"
      :navBarItems="navigation.barItems" 
      :title="navigation.title"
      @push="router.push"
    >
      <component :is="Component" />
      
      <ModalScene />
    </NavigationalView>
  </RouterView>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;

.vuety-navigational-view {
  @include vs.position(fixed, 0, 0, 0, 0)
}
</style>
