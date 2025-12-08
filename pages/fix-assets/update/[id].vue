<script setup>
import { useRouter } from '#imports'
import { onMounted } from 'vue'

const router = useRouter()

onMounted(() => {
    router.replace('/it-service-request')
})
</script>

<template>
    <div />
</template>

<style scoped>
/* legacy redirect page */
</style>
