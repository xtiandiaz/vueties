import { onMounted, onUnmounted } from "vue";

type EventTargetForSetup = EventTarget | VisualViewport

export function useEvent(key: keyof WindowEventMap, target: EventTargetForSetup, listener: (e: Event) => void) {
  onMounted(() => {
    console.log(`Adding ${target} event:`, key)
    target.addEventListener(key, listener)
  })
  onUnmounted(() => {
    console.log(`Removing ${target} event:`, key)
    target.removeEventListener(key, listener)
  })
}
