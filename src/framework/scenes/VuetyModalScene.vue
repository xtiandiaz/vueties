<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import ModalView from '../views/VuetyModalView.vue';

const router = useRouter()

const emits = defineEmits<{
  back: [void]
  push: [path: string]
}>()

const closePath = ref<string>()

function close() {
  if (closePath.value) {
    router.replace(closePath.value)
  }
}
</script>

<template>
  <RouterView 
    name="modal" 
    v-slot="{ Component }"
    @back="emits('back')"
    @close="close"
    @push="(path: string) => emits('push', path)"
    @set-close-path="(path: string) => closePath = path"
  >
    <Transition>
      <ModalView 
        v-if="Component"
        @close="close"
      >
        <component :is="Component" />
      </ModalView>
    </Transition>
  </RouterView>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use '../components/bars/styles' as bar-styles;

:deep(.vnv-view-wrapper) {
  padding-top: 0;
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
