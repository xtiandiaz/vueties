<script setup lang="ts">;
import ModalSearchView from '../views/VuetyModalSearchView.vue';
import ModalView from '../views/VuetyModalView.vue';
import NavigationalView from '../views/VuetyNavigationalView.vue'
import { useNavigator } from '../composables/_navigator';

const navigationOptions = useNavigator(true)
</script>

<template>
  <RouterView name="modal" v-slot="{ Component, route }">
    <Transition>
      <ModalSearchView 
        v-if="Component && route.name === 'search'"
        @close="navigationOptions?.closeModal()"
        @goBack="navigationOptions?.goBack()"
        @goTo="(path: string) => navigationOptions?.goTo(path)"
      >
        <component :is="Component" />
      </ModalSearchView>
      
      <ModalView 
        v-else-if="Component"
        @close="navigationOptions?.closeModal()"
      >
        <NavigationalView
          :enablesBackOption="navigationOptions.shouldEnableBackOption.value"
          :enablesCloseOption="navigationOptions.shouldEnableCloseOption.value"
          :navigationBarVM="{ controlsModal: true }"
          :title="route.meta._modalTitle?.value"
          @close="navigationOptions?.closeModal()"
          @goBack="navigationOptions?.goBack()"
          @goTo="(path: string) => navigationOptions?.goTo(path)"
        >
          <component :is="Component" />
        </NavigationalView>
      </ModalView>
    </Transition>
  </RouterView>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use '../components/bars/styles' as bar-styles;

:deep(.vuety-navigation-bar) {
  padding-top: 0;
}

:deep(.vnv-view-wrapper) {
  @include vs.position(absolute, bar-styles.$nav-bar-height, 0, 0, 0);
}

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
