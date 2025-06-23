<script setup lang="ts">
import ModalView from '../views/VuetyModalView.vue'
</script>

<template>
  <RouterView name="modal" v-slot="{ Component, route }">
    <Transition>
      <ModalView v-if="Component" :title="route.meta.title?.value">
        <component :is="Component" />
      </ModalView>
    </Transition>
  </RouterView>
</template>

<style scoped lang="scss">
@mixin transition($timing-function, $duration: 0.25s) {
  transition: none $duration $timing-function;
  
  :deep(.modal-background) {
    transition: opacity $duration $timing-function;
  }
  :deep(.navigational-view-wrapper) {
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
  :deep(.modal-background) {
    opacity: 0;
  }
  :deep(.navigational-view-wrapper) {
    transform: translateY(100%);
  }
}
</style>
