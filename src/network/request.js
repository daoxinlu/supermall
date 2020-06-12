import axios from 'axios'

export function request(config){
    //创建实例
    // axios.defaults.baseURL = 'http://123.207.32.32:8000/'
    // axios.defaults.timeout = 5000
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencode'
    const instance = axios.create()
    instance.interceptors.request.use(config=>{
        console.log('进入拦截器')
        //在这里处理请求参数，过滤掉不符合的参数等，验证token
        return config;
    },err=>{
        console.log('进入拦截器失败')
        return err
    })
    instance.interceptors.response.use(res=>{
        console.log('截取响应数据');
        return res
    },err=>{
        console.log('截取响应失败')
        return err
    })



    return instance(config)
    
}







