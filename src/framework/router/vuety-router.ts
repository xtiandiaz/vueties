import { ref, type Ref } from "vue";
import { createRouter, createWebHashHistory, type Router, type RouteRecordRaw } from "vue-router";

declare module 'vue-router' {
  interface RouteMeta {
    isModal: boolean
    showsLargeTitle: Ref<boolean>
    title: Ref<string | undefined>
  }
}

export function createVuetyRouter(routes: RouteRecordRaw[]): Router {
  routes.forEach(r => {
    r.meta = {
      isModal: r.components?.['modal'] !== undefined,
      showsLargeTitle: ref(false),
      title: ref<string>(),
    }
  })
    
  return createRouter({
    history: createWebHashHistory(),
    routes
  })
}
