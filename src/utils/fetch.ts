import type { Options } from './yofetch'
import yofetch from './yofetch'

console.log(import.meta.env.DEV)
const service = yofetch.create({
  baseURL: import.meta.env.DEV ? '/api' : 'http://ec2-18-167-116-79.ap-east-1.compute.amazonaws.com:3002',
  credentials: 'include',
})

// direct return response data
export const request = <T>(url: string | Options, config?: Options) => {
  return service.request<T>(url, config, 'get').then((response) => {
    const { data, ok } = response
    const { code, status, body } = data as any
    // success code is 100 or 200
    if (ok && [100, 200].includes(code)) {
      return data
    } else if (status === 200) {
      return body as T
    } else {
      return Promise.reject(data)
    }
  })
}
export const requestPost = <T>(url: string | Options, body: any, config?: Options) => {
  return service.request<T>(url, config, 'post', body).then((response) => {
    const { data, ok } = response
    const { code } = data as any
    // success code is 100 or 200
    if (ok && [100, 200].includes(code)) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export default service
