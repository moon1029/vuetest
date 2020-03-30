import axios from 'axios'
import queryString from 'queryString'  //转换格式包，无需下载

var instance = axios.create({
    baseURL: 'http://192.168.0.166:8090',   //连接后台地址的
    timeout: 3000,   //如果请求花费了超过 `timeout` 的时间，请求将被中断
    // responseType: 'json',   //服务器响应的数据类型
    // headers: {       //自定义请求头内容K
    //     'custome-header': 'test',
    //     'content-type': 'application/x-www-form-urlencoded'   //转换为key=value的格式必须增加content-type
    // },
    // transformRequest(data) {
    //     data.age = 30;  //发送之前增加的属性
    //     return queryString.stringify(data);   //利用对应方法转换格式
    // }
})

// 添加拦截器
/**
 *  请求拦截器
 */
instance.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    return config;
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
});

/**
 * 响应拦截器
 */
instance.interceptors.response.use((response) => {
    //处理响应的数据   
    return response;
},(error)=>{
    //响应错误
    return Promise.reject(error)
})

export default instance