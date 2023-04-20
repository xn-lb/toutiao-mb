import { getItem } from '@/utils/strorage'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // namespaced: true, //关闭命名空间
    state: {
        user: getItem('user') //使用封装模块的方式

        //使用原型模式  =>  user: JSON.parse(window.localStorage.getItem('user')) // 存储当前登录用户的登录状态（token 等数据）
    },
    getters: {},
    mutations: {
        setUser(state, data) {
            state.user = data
                // 为了防止页面刷新数据丢失，我们还需要把数据放到本地存储中，这里仅仅是为了持久化数据
            window.localStorage.setItem('user', JSON.stringify(state.user))
        }
    },
    actions: {},
    modules: {}
})