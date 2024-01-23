import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "defaultttt"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}