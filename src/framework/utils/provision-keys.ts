import type { InjectionKey, Ref } from 'vue'
import { VuetyTransitionState } from './types'

export const modalTransitionStateProvisionKey = Symbol() as InjectionKey<Ref<VuetyTransitionState | undefined>>
export const inputFocusProvisionKey = Symbol() as InjectionKey<string>
