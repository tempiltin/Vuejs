import { createApp } from 'vue'
import App from './Page/App.vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap"
import './assets/main.css'
import router from './router/index';
import store from './store/index';

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
