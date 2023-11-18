import type {IWard} from '@/utils/types'
import axios from './'
import MockAdapter from 'axios-mock-adapter'
const wards:IWard[] = [
  { id: 1, name: 'Xã Trà Bui' },
  { id: 2, name: 'Xã Trà Đốc' },
  { id: 3, name: 'Xã Trà Đông' },
  { id: 4, name: 'Xã Trà Đông' },
  { id: 5, name: 'Xã Trà Dương' },
  { id: 6, name: 'Xã Trà Giác' },
  { id: 7, name: 'Xã Trà Giang' },
  { id: 8, name: 'Xã Trà Giáp' },
  { id: 9, name: 'Xã Trà Ka' },
  { id: 10, name: 'Xã Trà Kót' },
  { id: 11, name: 'Xã Trà Nú' },
  { id: 12, name: 'Xã Trà Sơn' },
  { id: 13, name: 'Xã Trà Tân' }
]
// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios)

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onPost('/login').reply(200, {
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ',
  refreshToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ',
  role: 'ADMIN'
})

mock.onGet('/ward').reply(200, wards)
mock.onGet('/ward-detail', { params: { id: 1 } }).reply(200, { id: 13, name: 'Xã Trà Tân' })
