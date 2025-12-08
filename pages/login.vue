<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({
  layout: 'auth',
})

const form = ref({
  username: '',
  password: '',
})

const authStore = useAuthStore()
const router = useRouter()
const error = ref('')
const loading = ref(false)

const handleLogin = async () => {
  loading.value = true
  error.value = ''
  
  try {
    const success = await authStore.login(form.value)
    // const success = true // Mock
    if (success) {
      router.push('/')
    } else {
      error.value = 'Login failed. Please try again.'
    }
  } catch (e) {
    error.value = 'An error occurred.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <VCard class="auth-card pa-4" width="400" elevation="10">
    <VCardTitle class="text-h5 text-center mb-6 font-weight-bold text-primary">
      Welcome Back
    </VCardTitle>
    
    <VCardText>
      <VForm @submit.prevent="handleLogin">
        <VTextField
          v-model="form.username"
          label="Username"
          prepend-inner-icon="bx-user"
          variant="outlined"
          class="mb-4"
          placeholder="Enter your username"
        />
        
        <VTextField
          v-model="form.password"
          label="Password"
          prepend-inner-icon="bx-lock-alt"
          variant="outlined"
          type="password"
          class="mb-6"
          placeholder="Enter your password"
        />
        
        <VAlert
          v-if="error"
          type="error"
          variant="tonal"
          class="mb-4"
          closable
        >
          {{ error }}
        </VAlert>
        
        <VBtn
          block
          type="submit"
          color="primary"
          size="large"
          :loading="loading"
          class="text-capitalize font-weight-bold"
        >
          Login
        </VBtn>
      </VForm>
    </VCardText>
  </VCard>
</template>

<style scoped>
.auth-card {
  border-radius: 12px;
}
</style>
