import { inject, watch } from 'vue'
import type { Ref, InjectionKey } from 'vue'

export function watchInjection<T>(key: InjectionKey<Ref<T>>, callback: (value: T) => void) {
  const injection = inject(key) as T
  if (!injection) {
    return
  }
  
  watch(injection, (value) => {
    callback(value)
  })
}
