import type { IMenu, IWard } from '@/utils/types'
import request from './'
// get list ward
export const getWards = async () => {
  return request.get<IWard[], IWard[]>('/ward')
}

// get list ward
export const getWard = async (id: number) => {
  return request.get<IWard, IWard>('/ward-detail', { params: { id } })
}
