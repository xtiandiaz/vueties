<script setup lang="ts">
import { type VuetyNavigationBarVM } from '../components/bars/view-models'
import NavigationalView from '../views/VuetyNavigationalView.vue';
import ModalScene from './VuetyModalScene.vue';
import { useNavigator } from '../composables/_navigator'

defineProps<{
  navigationBarVM?: VuetyNavigationBarVM
}>()

const navigationOptions = useNavigator(false)
</script>

<template>
  <NavigationalView 
    :enablesBackOption="navigationOptions.shouldEnableBackOption.value"
    :enablesCloseOption="navigationOptions.shouldEnableCloseOption.value"
    :navigationBarVM="navigationBarVM" 
    :title="$route.meta._title?.value"
    @goBack="navigationOptions?.goBack()"
    @goTo="(path: string) => navigationOptions?.goTo(path)"
  >
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
@use '@vueties/utils/vuetystrap' as vs;

.vuety-navigational-view {
  @include vs.position(fixed, 0, 0, 0, 0)
}
</style>
