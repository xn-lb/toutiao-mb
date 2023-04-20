import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
import Vant from 'vant' //加载Vant 组件库
import 'vant/lib/index.css'
import 'amfe-flexible' //加载动态设置  rem 基准值

Vue.use(Vant); //注册使用组件库

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')