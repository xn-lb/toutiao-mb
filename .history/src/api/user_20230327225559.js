// 用户相关请求模块
import request from "@/utils/request";

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
export const getCountuser = () => {
    return request({
        method: 'GET',
        url: '/v1_0/user',
        headers: {
            Authorization: `Bearer 用户token`
        }
    })
}