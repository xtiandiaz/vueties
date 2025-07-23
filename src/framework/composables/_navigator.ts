import { ref, computed, watch, type ComputedRef, onMounted } from 'vue'
import { useRouter, type RouteLocationNormalizedLoadedGeneric } from 'vue-router'

export interface VuetyNavigationOptions {
  shouldEnableBackOption: ComputedRef<boolean>
  shouldEnableCloseOption: ComputedRef<boolean>
  
  closeModal(): void
  goBack(): void
  goTo(path: string): void
}

export function useNavigator(modal: boolean): VuetyNavigationOptions {
  const router = useRouter()
  
  type NavigationTrace = { path: string, isModal: boolean }
  const traces = ref<NavigationTrace[]>([])
  
  const shouldEnableBackOption = computed(() => {
    if (modal) {
      return traces.value.filter(t => t.isModal).length > 1  
    }
    
    console.log(router.currentRoute.value.path)
    return router.currentRoute.value.path !== '/' && !router.currentRoute.value.meta.isModal
  })
  const shouldEnableCloseOption = computed(() => modal)
  
  function traceRoute(currentRoute: RouteLocationNormalizedLoadedGeneric) {
    const newPath = currentRoute.path
    const isModal = currentRoute.meta.isModal
    
    const index = traces.value.findIndex(t => t.path === newPath && t.isModal === isModal)
    if (index >= 0) {
      traces.value.splice(index)
    }
    
    traces.value.push({ path: newPath, isModal })
    
    // console.log(traces.value.map(t => t.path).join('\n'))
  }
  
  watch(router.currentRoute, (currentRoute) => {
    traceRoute(currentRoute)
  })
  
  onMounted(async () => {
    await router.isReady()
    
    traceRoute(router.currentRoute.value)
  })
  
  function goBack() {
    if (traces.value.length > 1) {
      router.back()
    } else {
      router.replace('/')
    }
    traces.value.splice(traces.value.length - 1)
  }
  
  function closeModal() {
    const nonModalTraces = traces.value.filter(t => !t.isModal)
    const modalStretch = traces.value.length - nonModalTraces.length
    console.log("Modal Stretch:", modalStretch)
    
    router.go(-modalStretch)
    
    traces.value = nonModalTraces
  }
  
  return {
    shouldEnableBackOption,
    shouldEnableCloseOption,
    
    closeModal,
    goBack,
    goTo: (path: string) => {
      router.push(path)
    }
  }
}
