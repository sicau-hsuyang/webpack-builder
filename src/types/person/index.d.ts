import { Gender } from '@/enums'

export declare interface IUser {
  /**
   * @param 用户名
   */
  username: string

  password: string

  avatar: string
}

export declare interface IPerson {
  /**
   * @param 用户名
   */
  name: string

  sex: Gender

  age: number

  location: string

  hobby?: string

  university?: string
}
