import { HttpCRUDResponse } from '@/types'
import BaseService from './base';

export default abstract class BaseCRUDService<T> extends BaseService {
  abstract findAll(): Promise<HttpCRUDResponse<T[]>>

  abstract find(id: string): Promise<HttpCRUDResponse<T>>

  abstract create(model: T): Promise<void>

  abstract update(model: T): Promise<HttpCRUDResponse<T>>

  abstract remove(id: string): Promise<void>

  abstract batchRemove(ids: string[]): Promise<HttpCRUDResponse<T>
}
