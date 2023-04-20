import request from "@/utils/request"

// 文章相关请求模块



// 获取文章列表
export const getArticles = () => {
    return request({
        method: 'GET',
        url: '/v1_0/articles',

    })
}