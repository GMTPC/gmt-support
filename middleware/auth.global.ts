import { useAuthStore } from '@/stores/auth'

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()
  
  // Allow access to login page, purchase-request page, and all memo pages
  if (to.path === '/login' || to.path === '/purchase-request' || to.path.startsWith('/memo')) {
    return
  }

  // Redirect to login if not authenticated
  if (!authStore.isAuthenticated) {
    return navigateTo('/login')
  }
})
