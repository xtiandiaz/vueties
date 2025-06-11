import { type App } from 'vue'
import { VuetyHashRouter, type VuetyHashRouterOptions } from './models'

export default {
  install: (app: App, options: VuetyHashRouterOptions) => {
    const hashRouter = new VuetyHashRouter(options.routes, options.rootRouteKey)

    app.provide('vuety-hash-router', hashRouter)
    app.config.globalProperties.$vuetyHashRouter = hashRouter
  },
}
