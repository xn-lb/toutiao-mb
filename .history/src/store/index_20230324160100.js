import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null //存储当前用户的登录状态（token等数据）
    },
    getters: {},
    mutations: {
        steUser(state, data) {
            state.user = data
        }
    },
    actions: {},
    modules: {}
})