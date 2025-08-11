import type { ShallowRef } from 'vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { Range } from '@/assets/tungsten/math'
import { clamp } from '@/assets/tungsten/math'

export function useScrollSpanNormalized(
  scrollableElement: Readonly<ShallowRef<HTMLElement | null>>,
  rangePx: Range
) {
  const span = ref(0)

  function onElementScrolled() {
    span.value = clamp((scrollableElement.value!.scrollTop - rangePx.min) / (rangePx.max - rangePx.min), 0, 1)
  }

  onMounted(() => {
    scrollableElement.value!.addEventListener('scroll', onElementScrolled)
  })
  
  onBeforeUnmount(() => {
    scrollableElement.value!.removeEventListener('scroll', onElementScrolled)
  })
  
  return {
    span
  }
}
