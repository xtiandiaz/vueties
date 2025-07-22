import { ref, type Ref } from "vue";
import { createRouter, createWebHashHistory, type Router, type RouteRecordRaw } from "vue-router";

declare module 'vue-router' {
  interface RouteMeta {
    isModal: boolean
    
    _modalTitle?: Ref<string | undefined>
    _showsLargeTitle?: Ref<boolean>
    _title?: Ref<string | undefined>
    
    setTitle(title?: string, isAlsoShownLarge?: boolean): void
  }
}

export function createVuetyRouter(routes: RouteRecordRaw[]): Router {
  routes.flatMap(r => [r].concat(r.children ?? [])).forEach(r => {
    const isModal = r.components?.['modal'] !== undefined
    const _showsLargeTitle = ref(false)
    const _modalTitle = ref<string>()
    const _title = ref<string>()
    
    r.meta = {
      isModal, 
      
      _modalTitle,
      _showsLargeTitle,
      _title,
      
      setTitle: (t?: string, alsoLarge?: boolean) => {
        (isModal ? _modalTitle : _title).value = t
        _showsLargeTitle.value = alsoLarge ?? false
      }
    }
  })
    
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  return router
}
