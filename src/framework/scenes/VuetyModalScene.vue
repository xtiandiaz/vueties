<script setup lang="ts">;
import ModalSearchView from '../views/VuetyModalSearchView.vue';
import ModalView from '../views/VuetyModalView.vue';
import NavigationalView from '../views/VuetyNavigationalView.vue'
import { VuetyNavigationReturnMode } from '../components/bars/view-models'
</script>

<template>
  <RouterView name="modal" v-slot="{ Component, route }">
    <Transition>
      <ModalSearchView v-if="Component && route.name === 'search'">
        <component :is="Component" />
      </ModalSearchView>
      
      <ModalView v-else-if="Component">
        <NavigationalView
          :navigationBarVM="{ isVisible: true, returnMode: VuetyNavigationReturnMode.Close }"
          :title="route.meta.isModal ? route.meta.title?.value : undefined"
        >
          <component :is="Component" />
        </NavigationalView>
      </ModalView>
    </Transition>
  </RouterView>
</template>

<style scoped lang="scss">
@mixin transition($timing-function, $duration: 0.25s) {
  transition: none $duration $timing-function;
  
  :deep(.vmv-background) {
    transition: opacity $duration $timing-function;
  }
  :deep(.vmv-view-wrapper) {
    transition: transform $duration $timing-function;
  } 
}

.v-enter-active {
  @include transition(ease-out);
}
.v-leave-active {
  @include transition(ease-in);
}
.v-enter-from, .v-leave-to {
  :deep(.vmv-background) {
      opacity: 0;
  }
  :deep(.vmv-view-wrapper) {
    transform: translateY(100%);
  }
}
</style>
