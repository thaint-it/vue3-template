import type { IUserFilter } from '@/utils/types'
import request from './'
// get list user
export const getforms = async (params: IUserFilter) => {
  return request.get('/login', { params })
}
