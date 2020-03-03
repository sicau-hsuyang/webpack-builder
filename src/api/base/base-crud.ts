import { HttpResponse } from '@/types'
import BaseService from './base';

export default abstract class BaseCRUDService<T> extends BaseService {
  abstract findAll(): Promise<HttpResponse<T[]>>

  abstract find(id: string): Promise<HttpResponse<T>>

  abstract create(model: T): Promise<HttpResponse<void>>

  abstract update(model: T): Promise<HttpResponse<T>>

  abstract remove(id: string): Promise<HttpResponse<void>>

  abstract batchRemove(ids: string[]): Promise<HttpResponse<void>
}
