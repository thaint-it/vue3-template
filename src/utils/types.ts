import { bool, number } from 'yup'

/**AUTH */
export interface IAuth {
  role: string
  accessToken: string
  refreskToken: string
}
export interface ILoginForm {
  username: string
  password: string
}

/**USER */
export interface IUserFilter {
  keyword?: string
  wardId?: number
}

/**FORM */
export interface IFormFilter {
  keyword?: string
}
/**GENERAL */

export interface IMenu {
  name: string
  id: number
  isActive?: boolean
}

export interface IWard {
  id: number
  name: string
}

export interface IMenuItem {
  id: string
  name: string
  icon: string
  isActive: boolean,
  route:string
}
