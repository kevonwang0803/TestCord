import axios from 'axios'
import { createApp } from 'vue'
// import App from './components/02.life-cycle/App.vue'
// import App from './components/03.father-son/App.vue'
// import App from './components/04.brother/App.vue'
// import App from './components/05.provide&inject/App.vue'
import App from './components/06.network/App.vue'
import './index.css'


axios.defaults.baseURL="https://www.escook.cn"

const app = createApp(App);
app.config.globalProperties.$http = axios
app.mount('#app')
