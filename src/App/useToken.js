import {useState} from 'react'

/**
 * @author Mason
 * @version 0.1
 * 创建自定义的hook
 * 用sessionStorage 保存登录的状态
 */
export default function useToken(){
    const getToken=()=>{
        // 从sessionStorage 中取 token
        const tokenString = sessionStorage.getItem('token');
        // sessionStorage 存储的是 字符串格式
        const userToken = JSON.parse(tokenString);
        // 返回取出的token
        return userToken
    }
    //在声明之前获取 token的初始值
    const [token,setToken] = useState(getToken());
    function saveToken(userToken){
        console.log(userToken)
        //将 token 存储在sessionStorage 中
        sessionStorage.setItem('token', JSON.stringify(userToken));
        //设置更新token hook 的status
        setToken(userToken.token)
    }
    return {
        setToken:saveToken,
        token
    }
}