import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from 'axios'
let instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:7001/api',
  timeout: 60000,
  headers: {
    'x-requested-with': 'XMLHttpRequest'
  }
})

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在发送请求之前做些什么
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    return response
  },
  (error: any) => {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default instance
