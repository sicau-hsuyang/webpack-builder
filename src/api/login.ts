import http from '@/utils/http'
import { HttpResponse } from '@/types'

export function login() {
  return new Promise<HttpResponse>((resolve, reject) => {
    http.get("/login").then(res => {
      resolve(res.data as HttpResponse)
    }).catch(() => {
      reject()
    })
  })
}