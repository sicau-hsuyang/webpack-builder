import BaseCRUDService from '../base/base-crud'
import { HttpCRUDResponse } from '@/types'

export default class PersonService<IPerson> extends BaseCRUDService<IPerson> {
  findAll(): Promise<HttpCRUDResponse<IPerson[]>> {
    throw new Error('Method not implemented.')
  }
  find(id: string): Promise<HttpCRUDResponse<IPerson>> {
    throw new Error('Method not implemented.')
  }
  create(model: IPerson): Promise<void> {
    throw new Error('Method not implemented.')
  }
  update(model: IPerson): Promise<HttpCRUDResponse<IPerson>> {
    throw new Error('Method not implemented.')
  }
  remove(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
  batchRemove(ids: string[]): Promise<HttpCRUDResponse<IPerson>> {
    throw new Error('Method not implemented.')
  }
}
