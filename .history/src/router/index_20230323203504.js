import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

// 路由表
const routes = [{
        path: '/login',
        name: 'LoginIndex',
        component: () =>
            import ('@/views/login')
    },
    {
        path: '/',
        component: () =>
            import ('@/views/layout/')
        children: [{
            path: '', //默认子路由
            name: 'home',
            component: () =>
                import ('@/views/home/')
        }]
    }

]

const router = new VueRouter({
    routes
})

export default router