import { ref, provide } from 'vue'
import type { Ref, InjectionKey } from 'vue'

export function createProvisionRef<T>(key: InjectionKey<Ref<T | undefined>>): Ref<T | undefined> {
  const _ref = ref<T>()
  
  provide(key, _ref)
  
  return _ref
}
