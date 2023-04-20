// 搜索相关请求模块
import request from "@/utils/request";

// 获取所有频道列表
export const getSearchSuggestions = q => {
    return request({
        method: 'GET',
        url: '/v1_0/suggestion',
        params: {
            q
        }
    })
}
/v1_0/search


// 获取搜索结果
export const getSearchResults = params => {
    return request({
        method: 'GET',
        url: '/v1_0/suggestion',
        params
    })
}