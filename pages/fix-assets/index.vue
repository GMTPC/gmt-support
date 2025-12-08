<script setup>
import { useRouter } from '#imports'
import { onMounted } from 'vue'

const router = useRouter()

onMounted(() => {
  // Redirect legacy route to new path
  router.replace('/it-service-request')
})
</script>

<template>
  <div />
</template>

<style scoped>
/* legacy redirect page */
</style>
