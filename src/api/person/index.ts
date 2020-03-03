import BaseCRUDService from '../base/base-crud'
import { HttpResponse, IPerson } from '@/types'

export default class PersonService extends BaseCRUDService<IPerson> {
  findAll(): Promise<HttpResponse<IPerson[]>> {
    throw new Error('Method not implemented.')
  }

  find(id: string): Promise<HttpResponse<IPerson>> {
    throw new Error('Method not implemented.')
  }

  create(model: IPerson): Promise<HttpResponse<void>> {
    throw new Error('Method not implemented.')
  }

  update(model: IPerson): Promise<HttpResponse<IPerson>> {
    throw new Error('Method not implemented.')
  }

  remove(id: string): Promise<HttpResponse<void>> {
    throw new Error('Method not implemented.')
  }

  batchRemove(ids: string[]): Promise<HttpResponse<void>> {
    throw new Error('Method not implemented.')
  }
}
