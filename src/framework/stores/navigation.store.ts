import { defineStore } from "pinia"
import { ref } from 'vue'
import { useRouter } from "vue-router"
import type { VuetyNavigationBarItem } from "../components/shared/view-models"

interface Pathway {
  origin: string
  paths: string[]
}

export default defineStore('vuety-navigation', () => {
  const barItems = ref<VuetyNavigationBarItem<string>[]>([])
  const title = ref<string>()
  const router = useRouter()
  // const isModal = id.includes('modal')
  const pathways = ref<Map<symbol, Pathway | undefined>>(new Map())
  
  function setPathway(key: symbol) {
    const route = router.currentRoute
    
    pathways.value.set(key, { 
      origin: route.value.path,
      paths: []
    })
  }
  
  function back(key: symbol) {
    const pathway = pathways.value.get(key)!
    console.log(pathway, pathway.paths.pop())
    
    const previousPath = pathway.paths.last()
    router.replace(previousPath ?? '/')
  }
  
  function close(key: symbol) {
    const pathway = pathways.value.get(key)!
    
    if (pathway.origin) {
      router.replace(pathway.origin)
    }
    
    pathways.value.set(key, undefined)
  }
  
  function enablesBackButton(key: symbol) {
    return (pathways.value.get(key)?.paths.length ?? 0) > 1
  }
  
  function push(key: symbol, path: string) {
    pathways.value.get(key)?.paths.push(path)
    
    router.push(path)
  }
  
  return {
    barItems,
    title,
    
    back,
    close,
    enablesBackButton,
    push,
    setPathway,
  }
})
