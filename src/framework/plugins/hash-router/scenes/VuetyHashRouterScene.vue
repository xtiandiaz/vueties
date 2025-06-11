<script setup lang="ts">
import { inject } from 'vue'
import { type VuetyHashRouter } from '../models'
import HashRouterModalScene from './VuetyHashRouterModalScene.vue'
import NavigationalView from '../../../views/VuetyNavigationalView.vue'
import type { VuetyNavigationBarVM } from '../../../components/bars/view-models'

defineProps<{
  navigationBarVM: VuetyNavigationBarVM
}>()

const hashRouter = inject('vuety-hash-router') as VuetyHashRouter | undefined

function navigateToRoute(key: string) {
  hashRouter?.pushRoute(key)
}
</script>

<template>
  <NavigationalView
    :navigationBarVM="navigationBarVM"
    @route-selected="navigateToRoute"
  >
    <component :is="hashRouter?.baseRoute?.value.view" />
  </NavigationalView>
  
  <HashRouterModalScene 
    :route="hashRouter?.modalRoute.value"
  />
</template>
