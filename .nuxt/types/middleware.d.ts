import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "aut" | "aut1" | "login"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}