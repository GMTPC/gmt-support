<template>
  <div>
    <VContainer fluid>
      <!-- Breadcrumbs -->
      <Breadcrumbs :items="[{ text: 'ใบขอซื้อ', icon: 'bx-file' }]" :show-home="true" />

      <!-- Page Header -->
      <VRow>
        <VCol cols="12">
          <div class="d-flex justify-space-between align-center mb-4">
            <div>
              <h1 class="text-h4 font-weight-bold">
                ใบขอซื้อ (Purchase Request Memo)
              </h1>
              <p class="text-subtitle-1 text-medium-emphasis">
                รายการใบขอซื้อทั้งหมด
              </p>
            </div>
            <VBtn color="primary" size="large" @click="navigateTo('/memo/create')">
              <VIcon start>
                bx-plus
              </VIcon>
              สร้างใบขอซื้อใหม่
            </VBtn>
          </div>
        </VCol>
      </VRow>

      <!-- Memos List -->
      <VRow>
        <VCol cols="12">
          <VCard>
            <VCardText>
              <div v-if="memoStore.savedMemos.length === 0" class="text-center py-16">
                <VIcon size="80" color="grey-lighten-1">
                  bx-file
                </VIcon>
                <p class="text-h6 mt-4 text-medium-emphasis">
                  ยังไม่มีใบขอซื้อ
                </p>
                <p class="text-body-2 text-medium-emphasis mb-4">
                  เริ่มต้นสร้างใบขอซื้อแรกของคุณ
                </p>
                <VBtn color="primary" @click="navigateTo('/memo/create')">
                  <VIcon start>
                    bx-plus
                  </VIcon>
                  สร้างใบขอซื้อใหม่
                </VBtn>
              </div>

              <VDataTable v-else :headers="headers" :items="memoStore.savedMemos" :items-per-page="10"
                class="elevation-0">
                <template #item.date="{ item }">
                  {{ formatDate(item.date) }}
                </template>

                <template #item.purposes="{ item }">
                  <VChip v-if="item.purposes.consider" size="small" color="primary" class="mr-1">
                    พิจารณา
                  </VChip>
                  <VChip v-if="item.purposes.know" size="small" color="info" class="mr-1">
                    ทราบ
                  </VChip>
                  <VChip v-if="item.purposes.issueCommand" size="small" color="warning" class="mr-1">
                    ออกคำสั่ง
                  </VChip>
                  <VChip v-if="item.purposes.continue" size="small" color="success" class="mr-1">
                    ดำเนินการ
                  </VChip>
                </template>

                <template #item.updatedAt="{ item }">
                  {{ formatDateTime(item.updatedAt) }}
                </template>

                <template #item.actions="{ item }">
                  <div class="d-flex gap-1">
                    <VTooltip text="ดู" location="top">
                      <template #activator="{ props }">
                        <VBtn v-bind="props" icon size="small" variant="text" color="primary"
                          @click="viewMemo(item.id)">
                          <VIcon size="20">bx-show</VIcon>
                        </VBtn>
                      </template>
                    </VTooltip>

                    <VTooltip text="แก้ไข" location="top">
                      <template #activator="{ props }">
                        <VBtn v-bind="props" icon size="small" variant="text" color="info" @click="editMemo(item.id)">
                          <VIcon size="20">bx-edit</VIcon>
                        </VBtn>
                      </template>
                    </VTooltip>

                    <VTooltip text="Export PDF" location="top">
                      <template #activator="{ props }">
                        <VBtn v-bind="props" icon size="small" variant="text" color="success"
                          @click="exportMemo(item.id)">
                          <VIcon size="20">bxs-file-pdf</VIcon>
                        </VBtn>
                      </template>
                    </VTooltip>

                    <VTooltip text="ลบ" location="top">
                      <template #activator="{ props }">
                        <VBtn v-bind="props" icon size="small" variant="text" color="error"
                          @click="confirmDelete(item.id)">
                          <VIcon size="20">bx-trash</VIcon>
                        </VBtn>
                      </template>
                    </VTooltip>
                  </div>
                </template>
              </VDataTable>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>

    <!-- PDF Export Component (Hidden) -->
    <MemoPdfExport ref="pdfExportRef" :memo="memoStore.currentMemo" />

    <!-- Delete Confirmation Dialog -->
    <VDialog v-model="deleteDialog" max-width="400">
      <VCard>
        <VCardTitle>ยืนยันการลบ</VCardTitle>
        <VCardText>
          คุณต้องการลบใบขอซื้อนี้หรือไม่? การดำเนินการนี้ไม่สามารถย้อนกลับได้
        </VCardText>
        <VCardActions>
          <VSpacer />
          <VBtn variant="text" @click="deleteDialog = false">
            ยกเลิก
          </VBtn>
          <VBtn color="error" variant="flat" @click="handleDelete">
            ลบ
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- Snackbar -->
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
import MemoPdfExport from '~/components/MemoPdfExport.vue'
import { useMemoStore } from '~/stores/memo'

definePageMeta({
  layout: 'default',
})

const memoStore = useMemoStore()
const pdfExportRef = ref<InstanceType<typeof MemoPdfExport>>()
const deleteDialog = ref(false)
const memoToDelete = ref('')

const snackbar = ref({
  show: false,
  message: '',
  color: 'success',
})

const headers = [
  { title: 'เลขที่เอกสาร', key: 'documentNumber', sortable: true },
  { title: 'เรื่อง', key: 'subject', sortable: true },
  { title: 'จาก', key: 'from', sortable: true },
  { title: 'ถึง', key: 'to', sortable: true },
  { title: 'วันที่', key: 'date', sortable: true },
  { title: 'วัตถุประสงค์', key: 'purposes', sortable: false },
  { title: 'อัพเดทล่าสุด', key: 'updatedAt', sortable: true },
  { title: 'จัดการ', key: 'actions', sortable: false, align: 'center' as const },
]

const formatDate = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear() + 543
  return `${day}/${month}/${year}`
}

const formatDateTime = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear() + 543
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${day}/${month}/${year} ${hours}:${minutes}`
}

const showSnackbar = (message: string, color: string = 'success') => {
  snackbar.value = {
    show: true,
    message,
    color,
  }
}

const viewMemo = (id: string) => {
  navigateTo(`/memo/${id}?mode=view`)
}

const editMemo = (id: string) => {
  navigateTo(`/memo/${id}`)
}

const exportMemo = async (id: string) => {
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

const confirmDelete = (id: string) => {
  memoToDelete.value = id
  deleteDialog.value = true
}

const handleDelete = () => {
  try {
    memoStore.deleteMemo(memoToDelete.value)
    deleteDialog.value = false
    showSnackbar('ลบใบขอซื้อสำเร็จ', 'success')
  } catch (error) {
    console.error('Error deleting memo:', error)
    showSnackbar('เกิดข้อผิดพลาดในการลบ', 'error')
  }
}

onMounted(() => {
  // Load saved memos from localStorage
  memoStore.loadFromStorage()
})
</script>
