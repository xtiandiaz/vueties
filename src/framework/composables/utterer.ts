import { ref } from 'vue'

export function useUtterer() {
  const utterance = new SpeechSynthesisUtterance()
  const isUttering = ref(false)
  
  function utter(message: string, lang: string, rate: number = 1) {
    utterance.text = message
    utterance.lang = lang
    utterance.rate = rate
    
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
