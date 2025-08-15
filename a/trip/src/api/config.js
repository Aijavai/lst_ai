import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5173/api';

// 在每个请求发送前进行统一处理
// config 参数包含请求的所有配置信息
axios.interceptors.request.use((config) => {
    // token
    return config;
});
// 响应拦截
// - 在收到响应后进行统一处理
// - data 是axios响应对象，包含 data 、 status 、 headers 等属性
// - return data.data 直接返回响应的数据部分
axios.interceptors.response.use((data) => {
    return data.data
})

export default axios