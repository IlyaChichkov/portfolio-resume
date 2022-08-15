import {createApp} from 'vue'
import App from './App.vue'
import './App.css'
import VueI18n from "vue-i18n";

const app = createApp(App).mount('#app')
app.use(VueI18n)

const data = {
    EN: {
        profile: {
            name: 'Ilya Chichkov'
        }
    },
    RU: {
        profile: {
            name: 'Илья Чичков'
        }
    }
}

// Create VueI18n instance with options
// eslint-disable-next-line no-unused-vars
const localizeLib = new VueI18n({
    locale: 'EN', // set locale
    data, // set locale messages
})