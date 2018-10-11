import Vue from 'vue'
import VueI18n from 'vue-i18n'

import elementEn from 'element-ui/lib/locale/lang/en'
import elementZh from 'element-ui/lib/locale/lang/zh-CN'
import en from './lang/en'
import zh from './lang/zh'

Vue.use(VueI18n)

const messages = {
    en: {
        ...en,
        ...elementEn
    },
    zh: {
        ...zh,
        ...elementZh
    }
}

const i18n = new VueI18n({
    locale: 'en',
    messages
})

export default i18n