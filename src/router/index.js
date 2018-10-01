import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home'
import Page from '../pages/Page'

export default new VueRouter({
    routes: [{
            path: '/',
            component: Home,
        },
        {
            path: '/page',
            component: Page,
        }
    ]
})