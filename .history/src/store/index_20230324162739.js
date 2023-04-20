import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // namespaced: true, //关闭命名空间
    state: {
        user: null // 存储当前登录用户的登录状态（token 等数据）
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})