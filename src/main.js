// Bootstrap CSS (debe cargarse ANTES de los estilos personalizados)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Custom CSS (debe cargarse DESPUÉS de Bootstrap para sobrescribir estilos)
import './assets/main.css'

// Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
