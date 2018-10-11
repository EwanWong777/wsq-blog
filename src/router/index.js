import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import Article from '../pages/article/Article'
import Works from '../pages/works/Works'
import Message from '../pages/message/Message'
import About from '../pages/about/About'

const routes = new VueRouter({
    routes: [{
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [{
                path: '/home',
                component: Home,
            },
            {
                path: '/article',
                component: Article,
            },
            {
                path: '/works',
                component: Works,
            },
            {
                path: '/message',
                component: Message,
            },
            {
                path: '/about',
                component: About,
            },
        ]
    }]
})

export default routes