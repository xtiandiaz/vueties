<script setup lang="ts">
import { ref, inject } from 'vue'
import type { VuetyHashRoute, VuetyHashRouter } from '../models'
import ModalView from '../../../views/VuetyModalView.vue'

defineProps<{
  route?: VuetyHashRoute
}>()

const hashRouter = inject('vuety-hash-router') as VuetyHashRouter | undefined

const currentTitle = ref<string>()
</script>

<template>
  <Transition>
    <ModalView 
      v-if="route"
      :title="currentTitle"
      @close-button-clicked="hashRouter?.popRoute()"
    >
      <component 
        :is="route.view" 
        @view-title="(title: string) => currentTitle = title"
      />
    </ModalView>
  </Transition>
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
