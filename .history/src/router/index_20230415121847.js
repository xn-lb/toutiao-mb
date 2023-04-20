import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

// 路由表
const routes = [{
        path: '/',
        component: () =>
            import ('@/views/layout/'),
        children: [{
                path: '/qa',
                name: 'qa',
                component: () =>
                    import ('@/views/qa/')
            },
            {
                path: '/video',
                name: 'video',
                component: () =>
                    import ('@/views/video/')
            },
            {
                path: '/my',
                name: 'my',
                component: () =>
                    import ('@/views/my/')
            },
            {
                path: '/home', //默认子路由
                name: 'home',
                component: () =>
                    import ('@/views/home/')
            }
        ]
    }

]

const router = new VueRouter({
    routes
})

export default router