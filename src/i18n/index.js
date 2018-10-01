import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'

import en from './lang/en'
import zh from './lang/zh'

Vue.use(VueI18n)

const messages = {
    en: {
        ...en
    },
    zh: {
        ...zh
    }
}

const i18n = new VueI18n({
    locale: Cookies.get('language') || 'zh',
    messages
})

export default i18n