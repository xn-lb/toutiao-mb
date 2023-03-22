import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
// 加载Vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 注册使用Vant组件
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')