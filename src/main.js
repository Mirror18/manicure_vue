import '@/assets/main.css'
import 'animate.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from '@/App.vue'
import router from '@/router/index.js'
// 导入全局路由守卫
import '@/permission'
import 'nprogress/nprogress.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 引入图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
