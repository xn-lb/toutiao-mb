import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login'


Vue.use(VueRouter)

// 路由表
const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'LoginIndex',
        component: login
    }
]

const router = new VueRouter({
    routes
})

export default router