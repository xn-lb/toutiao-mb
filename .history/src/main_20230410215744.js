import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载全局样式
import './styles/index.less'
import Vant from 'vant' //加载Vant 组件库

import 'amfe-flexible' //加载动态设置  rem 基准值

Vue.use(Vant); //注册使用组件库

import 'dayjs/plugin/relativeTime'

import 'vant/lib/index.css' //加载全局样式

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')