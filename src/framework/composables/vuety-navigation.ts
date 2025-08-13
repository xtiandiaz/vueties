import { ref, computed, onMounted } from 'vue'
import type { ComputedRef } from 'vue'
import { useRouter } from 'vue-router'
import type { VuetyNavigationBarItem } from '../components/shared/view-models'

export interface VuetyNavigationOptions<Key> {
  enablesBackButton: ComputedRef<boolean>,
  enablesCloseButton: ComputedRef<boolean>,
  
  back(): void
  close(): void
  push(path: string): void
  reset(navBarItems: VuetyNavigationBarItem<Key>[]): void
}

export function useNavigation<Key>(): VuetyNavigationOptions<Key> {
  const router = useRouter()
  
  const originPath = ref<string>()
  const pendingPath = ref<string>()
  
  const pathway = ref<string[]>([])
  const enablesCloseButton = computed(() => pathway.value.length === 0)
  const enablesBackButton = computed(() => pathway.value.length > 0 && !enablesCloseButton.value)
  
  function back() {
    if (pathway.value.pop()) {
      router.back()
    }
  }

  function close() {
    router.replace(originPath.value ?? router.options.history.base)
  }

  function push(path: string) {
    pendingPath.value = path
    
    router.push(path)
  }

  router.beforeEach((to) => {
    console.log("to:", to.path)
    if (to.path === pendingPath.value) {
      pathway.value.push(to.path)
    }
    pendingPath.value = undefined
  })

  onMounted(() => {
    originPath.value = router.options.history.state.back?.toString()
    console.log(originPath.value)
  })
  
  return {
    enablesBackButton,
    enablesCloseButton,
    
    back,
    close,
    push
  }
}
