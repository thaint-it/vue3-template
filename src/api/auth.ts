import constants from '@/utils/constants'
import request from './'
import { type IAuth, type ILoginForm } from '@/utils/types'

// login
export const login = async (data: ILoginForm) => {
  return request.post('/login', data)
}

// set access token to localstorage
export const setAccessToken = (accessToken: string) => {
  localStorage.setItem(constants.ACCESS_TOKEN_KEY, accessToken)
}

// get access token from localstorage
export const getAccessToken = () => {
  localStorage.getItem(constants.ACCESS_TOKEN_KEY)
}

// set refresh token to localstorage
export const setRFToken = (accessToken: string) => {
  localStorage.setItem(constants.REFRESH_TOKEN_KEY, accessToken)
}

// get refresh token from localstorage
export const getRFToken = () => {
  localStorage.getItem(constants.REFRESH_TOKEN_KEY)
}
