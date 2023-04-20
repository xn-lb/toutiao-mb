import request from "@/utils/request"

// 文章相关请求模块
export request


// 获取文章列表
export const getUserChannels = () => {
    return request({
        method: 'GET',
        url: '/v1_0/user/channels',

    })
}