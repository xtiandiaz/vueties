<script setup lang="ts">;
import ModalSearchView from '../views/VuetyModalSearchView.vue';
import ModalView from '../views/VuetyModalView.vue';
import NavigationalView from '../views/VuetyNavigationalView.vue'
</script>

<template>
  <RouterView name="modal" v-slot="{ Component, route }">
    <Transition>
      <ModalSearchView v-if="Component && route.name === 'search'">
        <component :is="Component" />
      </ModalSearchView>
      
      <ModalView v-else-if="Component">
        <NavigationalView
          :navigationBarVM="{ controlsModal: true }"
          :title="route.meta._modalTitle?.value"
        >
          <component :is="Component" />
        </NavigationalView>
      </ModalView>
    </Transition>
  </RouterView>
</template>

<style scoped lang="scss">
@use '../components/bars/styles' as bar-styles;
@use '../styles/mixins';

:deep(.vuety-navigation-bar) {
  padding-top: 0;
}

:deep(.vnv-view-wrapper) {
  @include mixins.position(absolute, bar-styles.$nav-bar-height, 0, 0, 0);
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
