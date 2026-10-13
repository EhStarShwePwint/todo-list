import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import GlobalAlert from './components/GlobalAlert.vue'
import './assets/main.css'

const app = createApp(App)

// Global Component Registration
app.component('GlobalAlert', GlobalAlert)

app.use(router)
app.mount('#app')



