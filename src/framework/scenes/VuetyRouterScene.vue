<script setup lang="ts">
import { useRouter, useRoute, RouterView } from 'vue-router';
import NavigationalView from '../views/VuetyNavigationalView.vue'
import ModalView from '../views/VuetyModalView.vue'
import type { VuetyNavigationBarVM } from '../components/bars/view-models'

defineProps<{
  navigationBarVM: VuetyNavigationBarVM
}>()

const router = useRouter()
const route = useRoute()
</script>

<template>
  <NavigationalView
    :navigationBarVM="navigationBarVM"
  >
    <RouterView v-slot="{ Component }">
      <component :is="Component" />
      
      <RouterView name="modal" v-slot="{ Component }">
        <Transition>
          <ModalView
            v-if="Component" 
            :title="route.meta.title"
            @close-button-clicked="router.back()"
          >
            <component :is="Component" />
          </ModalView>
        </Transition>
      </RouterView>

    </RouterView>
  </NavigationalView>
  
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
