import axios from './'
import { type ILoginForm } from '@/types'

const login = async (data: ILoginForm) => {
  const resultPromise = new Promise((resolve, reject) => {
   resolve({
    accessToken: 'token'
   })
   reject('error')
  })
  return resultPromise
}

export  { login }
