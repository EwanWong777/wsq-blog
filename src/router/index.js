import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from '../App'
import Home from '../pages/home/Home'
import Page from '../pages/page/Page'
import About from '../pages/about/About'

const routes = new VueRouter({
    routes: [{
        path: '/',
        component: App,
        redirect: '/home',
        children: [{
                path: '/home',
                component: Home,
            },
            {
                path: '/page',
                component: Page,
            },
            {
                path: '/about',
                component: About,
            },
        ]
    }]
})

export default routes