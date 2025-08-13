import { defineStore } from "pinia"
import type { StoreDefinition } from "pinia"
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { VuetyNavigationBarItem } from "../components/shared/view-models"

interface VuetyNavigationState {
  barItems: Ref<VuetyNavigationBarItem<string>[]>
  title: Ref<string | undefined>
}

function _defineStore(id: string): StoreDefinition<typeof id, VuetyNavigationState> {
  return defineStore<typeof id, VuetyNavigationState>(id, () => {
    const barItems = ref<VuetyNavigationBarItem<string>[]>([])
    const title = ref<string>()
    
    return {
      barItems,
      title
    }
  })
}

export const useNavigationStore = _defineStore('vuety-nav')
export const useModalNavigationStore = _defineStore('vuety-modal-nav')
