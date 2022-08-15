import VueI18n from 'vue-i18n'

const data = {
    en: {
        profile: {
            name: 'Ilya Chichkov'
        }
    },
    ru: {
        profile: {
            name: 'Илья Чичков'
        }
    }
}

// Create VueI18n instance with options
const localizeLib = new VueI18n({
    locale: 'en', // set locale
    data, // set locale messages
})

export default localizeLib;