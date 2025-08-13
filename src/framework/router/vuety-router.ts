import { ref, type Ref } from "vue";
import { createRouter, createWebHashHistory, type Router, type RouteRecordRaw } from "vue-router";
import type { VuetyNavigationBarItem } from "../components/shared/view-models";

export interface VuetyNavigationOptions {
  barItems: VuetyNavigationBarItem<string>[]
  
  backPath?: string
  closePath?: string
}

declare module 'vue-router' { 
  interface RouteMeta {    
    isModal: boolean
    _showsLargeTitle?: Ref<boolean>
    
    _navOptions: Ref<VuetyNavigationOptions>
    _title: Ref<string | undefined>
    
    setNavOptions(options: VuetyNavigationOptions): void
    setTitle(title?: string): void
  }
}

export function createVuetyRouter(routes: RouteRecordRaw[]): Router {
  routes.flatMap(r => [r].concat(r.children ?? [])).forEach(r => {
    const _showsLargeTitle = ref(false)    
    
    const _navOptions = ref<VuetyNavigationOptions>({ barItems: [] })
    const _title = ref<string>()
    const isModal = Object.keys(r.components ?? {}).includes('modal')
    
    r.meta = {
      isModal,
      _showsLargeTitle,
      
      _navOptions,
      _title,
      
      setNavOptions(options: VuetyNavigationOptions) {
        _navOptions.value = options
      },
      setTitle: (title?: string) => {
        _title.value = title
      },
    }
  })
    
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  return router
}
