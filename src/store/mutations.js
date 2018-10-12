import Cookies from 'js-cookie'

const SET_LANGUAGE = 'SET_LANGUAGE'

const mutations = {
  [SET_LANGUAGE](state, language) {
    state.language = language
    Cookies.set('language', language)
  },
};

export default mutations