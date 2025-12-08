import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as any | null,
    isAuthenticated: false,
  }),
  actions: {
    async login(credentials: any) {
      try {
        const response = await $fetch('/api/auth/login', {
          method: 'POST',
          body: credentials,
        })

        this.user = { name: 'Demo User', ...credentials }
        this.isAuthenticated = true
        
        // Save to localStorage
        localStorage.setItem('user', JSON.stringify(this.user))
        
        return true
      } catch (e) {
        console.error(e)
        return false
      }
    },
    logout() {
      this.user = null
      this.isAuthenticated = false
      localStorage.removeItem('user')
    },
    initialize() {
      const user = localStorage.getItem('user')
      if (user) {
        this.user = JSON.parse(user)
        this.isAuthenticated = true
      }
    }
  }
})
