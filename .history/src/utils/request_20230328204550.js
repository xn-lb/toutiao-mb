// 封装axios 请求模块
import axios from "axios"

const request = axios.create({
    baseURL: 'http://toutiao.itheima.net/' //接口的基本路径
})


// 请求拦截器
// Add a request interceptor
axios.interceptors.request.use(function(config) {
    // Do something before request is sent
    console.log('123');
    return config
}, function(error) {
    // Do something with request error
    return Promise.reject(error)
})

// 响应拦截器

export default request