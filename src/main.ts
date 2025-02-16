import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css'
import Antd from 'ant-design-vue'
import 'virtual:svg-icons-register'
import '@/assets/style/main.less'

createApp(App).use(Antd).mount('#app')
