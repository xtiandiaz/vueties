import { ref } from 'vue'

export function useUtterer() {
  const utterance = new SpeechSynthesisUtterance()
  const isUttering = ref(false)
  
  function utter(message: string, lang: string) {
    utterance.text = message
    utterance.lang = lang
    
    speechSynthesis.cancel()
    speechSynthesis.speak(utterance)
  }
  
  utterance.addEventListener('start', () => isUttering.value = true)
  utterance.addEventListener('end', () => isUttering.value = false)
  
  return {
    isUttering,
    
    utter,
  }
}
