/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />
/// <reference types="vue-vine/macros" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}
