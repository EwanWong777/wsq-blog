import Cookies from 'js-cookie'

const state = {
  language: Cookies.get('language') || 'en',
  clientHeight: document.documentElement.clientHeight
};

export default state;