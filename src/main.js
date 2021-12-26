import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIconModules from '@element-plus/icons-vue'

import 'amfe-flexible'

import axios from 'axios'
import './mock'


const app = createApp(App)

for (let iconName in ElIconModules) {
    app.component(iconName, ElIconModules[iconName])
}

app.config.globalProperties.$http = axios;

app.use(store);
app.use(router);
app.use(ElementPlus);




app.mount('#app')
