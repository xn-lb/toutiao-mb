// 封装axios 请求模块
import axios form 'axios'

const request = axios.create({
    baseURL: 'http://ttapi.research.itcast.cn/' //接口的基本路径
})
export default request