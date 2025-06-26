import { onMounted, onUnmounted } from "vue";

type EventTargetForSetup = EventTarget | VisualViewport

export function setUpEvent(key: keyof WindowEventMap, target: EventTargetForSetup, callback: (e: Event) => void) {
  onMounted(() => {
    console.log(`Adding ${target} event:`, key)
    target.addEventListener(key, callback)
  })
  onUnmounted(() => {
    console.log(`Removing ${target} event:`, key)
    target.removeEventListener(key, callback)
  })
}
