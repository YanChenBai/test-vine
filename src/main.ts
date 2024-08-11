import '@unocss/reset/eric-meyer.css'
import './assets/main.css'
import 'virtual:uno.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app.vine'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
