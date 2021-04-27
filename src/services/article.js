import http from './http'

// 添加文章的接口
export function postArticle(params){
    return http('/article/create',{
        method:'POST',
        data:params
    })
}