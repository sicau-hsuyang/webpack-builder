import { HttpResponse } from '@/types'
import BaseService from '../base/base'

export class LoginService extends BaseService {
  login() {
    return new Promise<HttpResponse<void>>((resolve, reject) => {
      this.$http
        .get('/login')
        .then(res => {
          resolve(res.data)
        })
        .catch(() => {
          reject()
        })
    })
  }
}
