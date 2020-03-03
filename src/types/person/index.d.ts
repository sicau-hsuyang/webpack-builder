import { Gender } from '@/enums'

export declare interface IPerson {
  name: string

  sex: Gender

  age: number

  location: string

  hobby?: string

  university?: string
}
