import http from '@/utils/http'
import { AxiosInstance } from 'axios'

export default abstract class BaseService {
  protected readonly $http: AxiosInstance

  constructor() {
    this.$http = http
  }
}
