import http from './http'

export function postLogin(params){
    return http('/login',{
        method:'POST',
        data:params
    })
}
export function postRegister(params){
    return http('/register',{
        method:'POST',
        data:params
    })
}

export function postValidCode(params){
    return http('/register/sendValidCode',{
        method:'POST',
        data:params
    })
}