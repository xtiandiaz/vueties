import { onMounted } from 'vue'
import { setUpEvent } from "./set-up-event";
import { isMobile } from "@/assets/tungsten/navigator";

export function compensateForKeyboardSpace() {
  if (!isMobile()) {
    return
  }
  
  onMounted(() => {
    if (!visualViewport) {
      return
    }
    
    setUpEvent('resize', visualViewport, (e) => {
      const vv = e.target as VisualViewport
      const filler = document.getElementById('vuety-mobile-keyboard-filler')
      
      if (filler) {
        filler.style.height = `${vv.height}px`
      }
    })
  })
}
