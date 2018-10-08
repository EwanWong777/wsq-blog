import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/home/Home'
// import Page from '../pages/Page'

const routes = [{
        path: '',
        component: Home,
    }
]

export default new VueRouter({
    routes
})