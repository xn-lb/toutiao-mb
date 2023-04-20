// 用户相关请求模块
import request from "@/utils/request";


// 在非组件模块中获取store 必须通过这种方式引入
// 这里单独加载的store  和在组件中的this.$store是一样的 
import store from "@/store/";



// 登录/注册
export const login = data => {
    return request({
        method: 'POST',
        url: '/v1_0/authorizations',
        data
    })
}

// 发送短信验证码
export const sendSms = mobile => {
    return request({
        method: 'GET',
        url: `/v1_0/sms/codes/${mobile}`,
    })
}

// 获取登录用户信息
export const getCountUser = () => {
    return request({
        method: 'GET',
        url: '/v1_0/user',
        // 请求头
        headers: {
            Authorization: `Bearer ${store.state.user.token}`
        }
    })
}