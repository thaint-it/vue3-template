import { defineStore } from 'pinia'
import type { IAuth } from '@/utils/types'
import constants from '@/utils/constants'
// authentication module
const useAuthStore = defineStore('auth', {
  state: (): IAuth => {
    return {
      role: '',
      accessToken: localStorage.getItem(constants.ACCESS_TOKEN_KEY) || '',
      refreskToken: ''
    }
  },
  getters: {
    user: (state) => state
  },
  actions: {
    setAuth(data: IAuth) {
      this.$state = { ...data }
    }
  }
})
export default useAuthStore
