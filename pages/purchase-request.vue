<template>
  <div>
    <VContainer fluid>
      <!-- Page Header -->
      <VRow>
        <VCol cols="12">
          <div class="d-flex justify-space-between align-center mb-4">
            <div>
              <h1 class="text-h4 font-weight-bold">
                ใบขอซื้อ (Purchase Request Memo)
              </h1>
              <p class="text-subtitle-1 text-medium-emphasis">
                สร้างและจัดการใบขอซื้อของคุณ
              </p>
            </div>
          </div>
        </VCol>
      </VRow>

      <!-- Main Form -->
      <VRow>
        <VCol cols="12" lg="8">
          <MemoForm
            :memo="memoStore.currentMemo"
            :is-saved="!!memoStore.currentMemo.id"
            @save="handleSave"
            @export-pdf="handleExportPdf"
            @reset="handleReset"
          />
        </VCol>

        <!-- Saved Memos List -->
        <VCol cols="12" lg="4">
          <VCard>
            <VCardTitle>
              <div class="d-flex justify-space-between align-center">
                <span>บันทึกที่บันทึกไว้</span>
                <VChip
                  color="primary"
                  size="small"
                >
                  {{ memoStore.savedMemos.length }}
                </VChip>
              </div>
            </VCardTitle>
            <VDivider />
            <VCardText>
              <div v-if="memoStore.savedMemos.length === 0" class="text-center text-medium-emphasis py-8">
                <VIcon size="48" color="grey-lighten-1">
                  mdi-file-document-outline
                </VIcon>
                <p class="mt-2">
                  ยังไม่มีบันทึกที่บันทึกไว้
                </p>
              </div>

              <VList v-else density="compact">
                <VListItem
                  v-for="memo in memoStore.savedMemos"
                  :key="memo.id"
                  :class="{ 'bg-primary-lighten-5': memo.id === memoStore.currentMemo.id }"
                  @click="handleLoadMemo(memo.id)"
                >
                  <template #prepend>
                    <VIcon color="primary">
                      mdi-file-document
                    </VIcon>
                  </template>

                  <VListItemTitle>
                    {{ memo.subject || 'ไม่มีหัวข้อ' }}
                  </VListItemTitle>
                  <VListItemSubtitle>
                    {{ formatDate(memo.date) }} - {{ memo.documentNumber || 'ไม่มีเลขที่' }}
                  </VListItemSubtitle>

                  <template #append>
                    <div class="d-flex gap-1">
                      <VBtn
                        icon
                        size="small"
                        variant="text"
                        @click.stop="handleExportMemo(memo.id)"
                      >
                        <VIcon size="20">
                          mdi-file-pdf-box
                        </VIcon>
                        <VTooltip activator="parent" location="top">
                          Export PDF
                        </VTooltip>
                      </VBtn>
                      <VBtn
                        icon
                        size="small"
                        variant="text"
                        color="error"
                        @click.stop="handleDeleteMemo(memo.id)"
                      >
                        <VIcon size="20">
                          mdi-delete
                        </VIcon>
                        <VTooltip activator="parent" location="top">
                          ลบ
                        </VTooltip>
                      </VBtn>
                    </div>
                  </template>
                </VListItem>
              </VList>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>

    <!-- PDF Export Component (Hidden) -->
    <MemoPdfExport
      ref="pdfExportRef"
      :memo="memoStore.currentMemo"
    />

    <!-- Success Snackbar -->
    <VSnackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="3000"
    >
      {{ snackbar.message }}
      <template #actions>
        <VBtn
          variant="text"
          @click="snackbar.show = false"
        >
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

const formatDate = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear() + 543
  return `${day}/${month}/${year}`
}

const handleSave = () => {
  try {
    const memoId = memoStore.saveMemo()
    showSnackbar('บันทึกสำเร็จ!', 'success')
  } catch (error) {
    console.error('Error saving memo:', error)
    showSnackbar('เกิดข้อผิดพลาดในการบันทึก', 'error')
  }
}

const handleExportPdf = async () => {
  try {
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

const handleLoadMemo = (id: string) => {
  memoStore.loadMemo(id)
  showSnackbar('โหลดบันทึกแล้ว', 'info')
}

const handleExportMemo = async (id: string) => {
  try {
    const currentId = memoStore.currentMemo.id
    memoStore.loadMemo(id)
    await pdfExportRef.value?.exportToPdf()
    
    // Restore previous memo if different
    if (currentId !== id && currentId) {
      memoStore.loadMemo(currentId)
    }
    
    showSnackbar('Export PDF สำเร็จ!', 'success')
  } catch (error) {
    console.error('Error exporting memo:', error)
    showSnackbar('เกิดข้อผิดพลาดในการ Export PDF', 'error')
  }
}

const handleDeleteMemo = (id: string) => {
  if (confirm('คุณต้องการลบบันทึกนี้หรือไม่?')) {
    memoStore.deleteMemo(id)
    
    // Reset current memo if it was deleted
    if (memoStore.currentMemo.id === id) {
      memoStore.resetCurrentMemo()
    }
    
    showSnackbar('ลบบันทึกแล้ว', 'warning')
  }
}

onMounted(() => {
  // Load saved memos from localStorage
  memoStore.loadFromStorage()
})
</script>

<style scoped>
.bg-primary-lighten-5 {
  background-color: rgba(var(--v-theme-primary), 0.1);
}
</style>
