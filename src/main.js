import {createApp} from 'vue'
import App from './App.vue'
import './App.css'
import VueI18n from "vue-i18n";
import i18n from './i18n'
import router from './router/routes'

const app = createApp(App).use(router).use(i18n).mount('#app')
app.use(VueI18n)
