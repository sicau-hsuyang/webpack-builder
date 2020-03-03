export declare interface HttpResponse {
  status: boolean

  code: number

  msg?: string
}

export declare interface HttpCRUDResponse<T> extends HttpResponse {
  data: T | T[]
}
