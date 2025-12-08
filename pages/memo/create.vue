<template>
    <div>
        <VContainer fluid>
            <!-- Breadcrumbs -->
            <Breadcrumbs :items="[
                { text: 'ใบขอซื้อ', to: '/memo', icon: 'bx-file' },
                { text: 'สร้างใหม่', icon: 'bx-plus' }
            ]" :show-home="true" />

            <!-- Page Header -->
            <VRow>
                <VCol cols="12">
                    <div class="d-flex justify-space-between align-center mb-4">
                        <div>
                            <h1 class="text-h4 font-weight-bold">
                                สร้างใบขอซื้อใหม่
                            </h1>
                            <p class="text-subtitle-1 text-medium-emphasis">
                                กรอกข้อมูลเพื่อสร้างใบขอซื้อ
                            </p>
                        </div>
                        <VBtn variant="outlined" @click="navigateTo('/memo')">
                            <VIcon start>
                                bx-arrow-back
                            </VIcon>
                            กลับ
                        </VBtn>
                    </div>
                </VCol>
            </VRow>

            <!-- Form -->
            <VRow>
                <VCol cols="12">
                    <MemoForm :memo="memoStore.currentMemo" :is-saved="false" @save="handleSave"
                        @export-pdf="handleExportPdf" @reset="handleReset" />
                </VCol>
            </VRow>
        </VContainer>

        <!-- PDF Export Component (Hidden) -->
        <MemoPdfExport ref="pdfExportRef" :memo="memoStore.currentMemo" />

        <!-- Success Snackbar -->
        <VSnackbar v-model="snackbar.show" :color="snackbar.color" :timeout="3000">
            {{ snackbar.message }}
            <template #actions>
                <VBtn variant="text" @click="snackbar.show = false">
                    ปิด
                </VBtn>
            </template>
        </VSnackbar>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MemoForm from '~/components/MemoForm.vue'
import MemoPdfExport from '~/components/MemoPdfExport.vue'
import { useMemoStore } from '~/stores/memo'

definePageMeta({
    layout: 'default',
})

const memoStore = useMemoStore()
const pdfExportRef = ref<InstanceType<typeof MemoPdfExport>>()

const snackbar = ref({
    show: false,
    message: '',
    color: 'success',
})

const showSnackbar = (message: string, color: string = 'success') => {
    snackbar.value = {
        show: true,
        message,
        color,
    }
}

const handleSave = () => {
    try {
        const memoId = memoStore.saveMemo()
        showSnackbar('บันทึกสำเร็จ!', 'success')

        // Navigate to edit page after save
        setTimeout(() => {
            navigateTo(`/memo/${memoId}`)
        }, 1000)
    } catch (error) {
        console.error('Error saving memo:', error)
        showSnackbar('เกิดข้อผิดพลาดในการบันทึก', 'error')
    }
}

const handleExportPdf = async () => {
    try {
        // Save first if not saved
        if (!memoStore.currentMemo.id) {
            memoStore.saveMemo()
        }

        await pdfExportRef.value?.exportToPdf()
        showSnackbar('Export PDF สำเร็จ!', 'success')
    } catch (error) {
        console.error('Error exporting PDF:', error)
        showSnackbar('เกิดข้อผิดพลาดในการ Export PDF', 'error')
    }
}

const handleReset = () => {
    if (confirm('คุณต้องการรีเซ็ตฟอร์มหรือไม่?')) {
        memoStore.resetCurrentMemo()
        showSnackbar('รีเซ็ตฟอร์มแล้ว', 'info')
    }
}

onMounted(() => {
    // Reset current memo when creating new
    memoStore.resetCurrentMemo()
    // Load saved memos from localStorage
    memoStore.loadFromStorage()
})
</script>
