// 封装axios 请求模块
import axios from "axios"

const request = axios.create({
    baseURL: 'http://toutiao.itheima.net/' //接口的基本路径
})

export default request