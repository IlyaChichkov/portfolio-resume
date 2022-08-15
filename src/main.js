import {createApp} from 'vue'
import App from './App.vue'
import './App.css'
import VueI18n from "vue-i18n";
import i18n from './i18n'

const app = createApp(App).use(i18n).mount('#app')
app.use(VueI18n)
