import http from './http'

export function postData(params){
    return http('/login',{
        method:'POST',
        data:params
    })
}