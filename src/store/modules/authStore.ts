
import { defineStore } from 'pinia'
export interface Auth{
  name: string|null,
  role: string|null,
  accessToken:string|null
}

const useAuthStore = defineStore('auth', {
  state: ():Auth => {
    return {
      name: "thaint",
      role: null,
      accessToken: localStorage.getItem('accessToken')
    }
  },
  getters: {
    user: (state) => state
  },
  actions: {
    setAuth(data:Auth) {
      this.$state={...data}
    }
  }
})
export default useAuthStore
