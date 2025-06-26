<script setup lang="ts">;
import { ref, provide } from 'vue';
import ModalNavigationalView from '../views/VuetyModalNavigationalView.vue'
import ModalSearchView from '../views/VuetyModalSearchView.vue';
import { VuetyTransitionState } from '../utils/types';
import { modalTransitionStateProvisionKey } from '../utils/provision-keys';

const transitionState = ref<VuetyTransitionState>()

provide(modalTransitionStateProvisionKey, transitionState)
</script>

<template>
  <RouterView name="modal" v-slot="{ Component, route }">
    <Transition
      @after-enter="transitionState = VuetyTransitionState.Entered"
      @after-leave="transitionState = VuetyTransitionState.Left"
    >
      <ModalSearchView v-if="Component && route.name === 'search'">
        <component :is="Component" />
      </ModalSearchView>
      
      <ModalNavigationalView v-else-if="Component" :title="route.meta.title?.value">
        <component :is="Component" />
      </ModalNavigationalView>
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
