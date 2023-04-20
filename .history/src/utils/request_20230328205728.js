// 封装axios 请求模块
import axios from "axios"

// 在非组件模块中获取store 必须通过这种方式引入
// 这里单独加载的store  和在组件中的this.$store是一样的 
import store from "@/store/";

const request = axios.create({
    baseURL: 'http://toutiao.itheima.net/' //接口的基本路径
})


// 请求拦截器
// Add a request interceptor
request.interceptors.request.use(function(config) {
    // Do something before request is sent
    const { user } = store.state
    if (user) {
        config.headers.Authorization = `Bearer ${user.token}`
    }
    return config
}, function(error) {
    // Do something with request error
    return Promise.reject(error)
})

// 响应拦截器

export default request