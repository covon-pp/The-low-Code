import './assets/style/main.scss'
import './assets/style/animate.scss'
import 'uno.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/icons/iconfont.js'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'animate.css'

// import draggable from 'vuedraggable'

import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
// app.use(draggable)
app.mount('#app')
