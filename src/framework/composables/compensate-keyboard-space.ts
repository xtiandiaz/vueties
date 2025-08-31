import { onMounted } from 'vue'
import { useWindowEvent } from "./window-event";
import { isMobile } from "@/assets/tungsten/navigator"

export function compensateForKeyboardSpace() {
  if (!isMobile()) {
    return
  }
  
  onMounted(() => {
    if (!visualViewport) {
      return
    }
    
    useWindowEvent('resize', visualViewport, (e) => {
      const vv = e.target as VisualViewport
      const filler = document.getElementById('vuety-mobile-keyboard-filler')
      
      if (filler) {
        filler.style.height = `${vv.height}px`
      }
    })
  })
}
