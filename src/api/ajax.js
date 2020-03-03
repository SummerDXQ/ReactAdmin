// handle error
import axios from 'axios'
import {message} from 'antd'
export default function ajax(url,data={},method='GET'){
    return new Promise((resolve,reject)=>{
        let promise;
        if(method==='GET'){
            promise = axios.get(url,{
                params:data
            })
        }else{
            promise =  axios.post(url,data)
        }
        promise
        .then(response=>{
            resolve(response.data)
        })
        // 同一处理请求错误，不需要try/catch（在外层包一个自己创建的promise对象），在请求出错时候不去reject
        .catch(error=>{
            message.error(error.message)
        })
    })
    
}