import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue'
import 'virtual:svg-icons-register'

createApp(App)
  .use(Antd)
  .mount('#app')
