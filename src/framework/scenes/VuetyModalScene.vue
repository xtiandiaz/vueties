<script setup lang="ts">
import ModalView from '../views/VuetyModalView.vue';
</script>

<template>
  <RouterView name="modal" v-slot="{ Component }">
    <Transition>
      <ModalView v-if="Component">
        <component :is="Component" />
      </ModalView>
    </Transition>
  </RouterView>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use '../components/bars/styles' as bar-styles;

:deep(.vnv-view-wrapper) {
  padding-top: bar-styles.$nav-bar-height;
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
