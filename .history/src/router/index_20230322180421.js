import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login'


Vue.use(VueRouter)

// 路由表
const routes = [{
    path: '/login',
    name: 'LoginIndex',
    component: () =>
        import ('@/views/login')
}]

const router = new VueRouter({
    routes
})

export default router