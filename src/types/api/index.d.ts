export declare interface HttpResponse<T> {
  status: boolean

  code: number

  msg?: string

  data?: T
}
