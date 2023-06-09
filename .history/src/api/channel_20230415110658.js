// 频道相关请求模块
import request from "@/utils/request";

// 获取所有频道列表
export const getAllChannels = () => {
    return request({
        method: 'GET',
        url: '/v1_0/channels'
    })
}

// 添加用户频道
export const addUserChannel = () => {
    return request({
        method: 'PATCH',
        url: '/v1_0/user/channels'
    })
}