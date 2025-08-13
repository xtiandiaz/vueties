<script setup lang="ts">;
import { computed, KeepAlive, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ModalView from '../views/VuetyModalView.vue';
import NavigationalView from '../views/VuetyNavigationalView.vue'
import { useModalNavigationStore } from '../stores/navigation.store';

const router = useRouter()
const route = useRoute()
const modalNavigation = useModalNavigationStore()

function backOrClose(toPath: string) {
  router.replace(toPath)
}

watch(() => route.matched, (matched) => {
  console.log("has default?", matched.some(m => m?.components?.['default'] != undefined))
}, { immediate: true })
</script>

<template>
  <RouterView name="modal" v-slot="{ Component, route }">
    <Transition>
      <ModalView 
        v-if="Component"
      >
        <NavigationalView
          :backPath="route.meta._navOptions.value.backPath"
          :closePath="route.meta._navOptions.value.closePath"
          :navBarItems="modalNavigation.barItems" 
          :title="modalNavigation.title"
          @back="backOrClose"
          @close="backOrClose"
          @push="router.push"
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
