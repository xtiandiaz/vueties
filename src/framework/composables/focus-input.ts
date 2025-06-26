import { inject, provide, watch, type Ref } from 'vue'
import { VuetyTransitionState } from '../utils/types'

export enum VuetyFocusTrigger {
  ModalEntered
}

export function flagInputFocus(key: string, trigger: VuetyFocusTrigger) {
  switch (trigger) {
    case VuetyFocusTrigger.ModalEntered:
      const modalTransitionState = inject<Ref<VuetyTransitionState>>('modal-transition-state')!
      
      watch(modalTransitionState, (state) => {
        console.log("modal-transition-state", state)
        
        if (state === VuetyTransitionState.Entered) {
          // provide('input-focus-key', key)
        }
      })
      break
  }
}

export function focusInput(inputEl: HTMLInputElement, key: string) {
  const focusKey = inject('input-focus-key')
  
  watch(() => focusKey, (value) => {
    console.log("focus-key", focusKey)
    
    if (value === key) {
      inputEl.focus()
    }
  })
}
