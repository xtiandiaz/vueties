import { ref } from 'vue'
import { defineStore } from "pinia";

export enum VuetyTransitionState {
  Entered,
  Leaving
}

export enum VuetyFocusInputTargetKey {
  SearchInput
}

export default defineStore('vuety-status', () => {
  const modalTransitionState = ref<VuetyTransitionState | undefined>()
  const focusInputTarget = ref<VuetyFocusInputTargetKey | undefined>()
  
  return {
    focusInputTarget,
    modalTransitionState
  }
})
