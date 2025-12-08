<template>
  <div>
    <VContainer fluid>
      <!-- Breadcrumbs -->
      <Breadcrumbs :items="[
        { text: 'ใบขอซื้อ', to: '/memo', icon: 'bx-file' },
        { text: isViewMode ? 'ดูใบขอซื้อ' : 'แก้ไขใบขอซื้อ', icon: isViewMode ? 'bx-show' : 'bx-edit' }
      ]" :show-home="true" />

      <!-- Page Header -->
      <VRow>
        <VCol cols="12">
          <div class="d-flex justify-space-between align-center mb-4">
            <div>
              <h1 class="text-h4 font-weight-bold">
                {{ isViewMode ? 'ดูใบขอซื้อ' : 'แก้ไขใบขอซื้อ' }}
              </h1>
              <p class="text-subtitle-1 text-medium-emphasis">
                {{ memoStore.currentMemo.subject || 'ไม่มีหัวข้อ' }}
              </p>
            </div>
            <div class="d-flex gap-2">
              <VBtn v-if="isViewMode" color="primary" @click="toggleEditMode">
                <VIcon start>
                  bx-edit
                </VIcon>
                แก้ไข
              </VBtn>
              <VBtn variant="outlined" @click="navigateTo('/memo')">
                <VIcon start>
                  bx-arrow-back
                </VIcon>
                กลับ
              </VBtn>
            </div>
          </div>
        </VCol>
      </VRow>

      <!-- View Mode -->
      <VRow v-if="isViewMode">
        <VCol cols="12">
          <VCard>
            <VCardText>
              <VRow>
                <VCol cols="12" md="6">
                  <div class="mb-4">
                    <div class="text-caption text-medium-emphasis">จาก (From)</div>
                    <div class="text-body-1">{{ memoStore.currentMemo.from || '-' }}</div>
                  </div>
                </VCol>
                <VCol cols="12" md="6">
                  <div class="mb-4">
                    <div class="text-caption text-medium-emphasis">ถึง (To)</div>
                    <div class="text-body-1">{{ memoStore.currentMemo.to || '-' }}</div>
                  </div>
                </VCol>
                <VCol cols="12" md="6">
                  <div class="mb-4">
                    <div class="text-caption text-medium-emphasis">สำเนา (CC)</div>
                    <div class="text-body-1">{{ memoStore.currentMemo.cc || '-' }}</div>
                  </div>
                </VCol>
                <VCol cols="12" md="3">
                  <div class="mb-4">
                    <div class="text-caption text-medium-emphasis">วันที่</div>
                    <div class="text-body-1">{{ formatDate(memoStore.currentMemo.date) }}</div>
                  </div>
                </VCol>
                <VCol cols="12" md="3">
                  <div class="mb-4">
                    <div class="text-caption text-medium-emphasis">เลขที่เอกสาร</div>
                    <div class="text-body-1">{{ memoStore.currentMemo.documentNumber || '-' }}</div>
                  </div>
                </VCol>
              </VRow>

              <VDivider class="my-4" />

              <div class="mb-4">
                <div class="text-subtitle-2 mb-2">วัตถุประสงค์:</div>
                <div class="d-flex flex-wrap gap-2">
                  <VChip v-if="memoStore.currentMemo.purposes.consider" color="primary" size="small">
                    เพื่อพิจารณา
                  </VChip>
                  <VChip v-if="memoStore.currentMemo.purposes.know" color="info" size="small">
                    เพื่อทราบ
                  </VChip>
                  <VChip v-if="memoStore.currentMemo.purposes.issueCommand" color="warning" size="small">
                    เพื่อออกคำสั่ง
                  </VChip>
                  <VChip v-if="memoStore.currentMemo.purposes.continue" color="success" size="small">
                    เพื่อดำเนินการ
                  </VChip>
                  <span v-if="!hasAnyPurpose" class="text-medium-emphasis">-</span>
                </div>
              </div>

              <div class="mb-4">
                <div class="text-subtitle-2 mb-2">การดำเนินการ:</div>
                <div class="d-flex flex-wrap gap-2">
                  <VChip v-if="memoStore.currentMemo.actions.follow" size="small">ปฏิบัติตาม</VChip>
                  <VChip v-if="memoStore.currentMemo.actions.considerReturn" size="small">
                    พิจารณาแล้วส่งคืน</VChip>
                  <VChip v-if="memoStore.currentMemo.actions.copyStores" size="small">ถ่ายสำเนาเก็บไว้
                  </VChip>
                  <VChip v-if="memoStore.currentMemo.actions.returnCopies" size="small">ส่งสำเนาคืน
                  </VChip>
                  <VChip v-if="memoStore.currentMemo.actions.forApproval" size="small">เพื่ออนุมัติ
                  </VChip>
                  <VChip v-if="memoStore.currentMemo.actions.toConsider" size="small">เพื่อพิจารณา
                  </VChip>
                  <VChip v-if="memoStore.currentMemo.actions.toKnow" size="small">เพื่อทราบ</VChip>
                  <VChip v-if="memoStore.currentMemo.actions.other" size="small">
                    อื่นๆ: {{ memoStore.currentMemo.otherAction }}
                  </VChip>
                  <span v-if="!hasAnyAction" class="text-medium-emphasis">-</span>
                </div>
              </div>

              <VDivider class="my-4" />

              <VRow>
                <VCol cols="12">
                  <div class="mb-4">
                    <div class="text-caption text-medium-emphasis">เรื่อง</div>
                    <div class="text-body-1">{{ memoStore.currentMemo.subject || '-' }}</div>
                  </div>
                </VCol>
                <VCol cols="12">
                  <div class="mb-4">
                    <div class="text-caption text-medium-emphasis">รายละเอียด</div>
                    <div class="text-body-1">{{ memoStore.currentMemo.details || '-' }}</div>
                  </div>
                </VCol>
                <VCol cols="12">
                  <div class="mb-4">
                    <div class="text-caption text-medium-emphasis">ข้อความ/เนื้อหา</div>
                    <div class="text-body-1" style="white-space: pre-wrap;">
                      {{ memoStore.currentMemo.message || '-' }}
                    </div>
                  </div>
                </VCol>
              </VRow>

              <VDivider class="my-4" />

              <div class="d-flex gap-2">
                <VBtn color="success" @click="handleExportPdf">
                  <VIcon start>
                    mdi-file-pdf-box
                  </VIcon>
                  Export PDF
                </VBtn>
                <VBtn color="primary" variant="outlined" @click="toggleEditMode">
                  <VIcon start>
                    mdi-pencil
                  </VIcon>
                  แก้ไข
                </VBtn>
              </div>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>

      <!-- Edit Mode -->
      <VRow v-else>
        <VCol cols="12">
          <MemoForm :memo="memoStore.currentMemo" :is-saved="true" @save="handleSave" @export-pdf="handleExportPdf"
            @reset="handleReset" />
        </VCol>
      </VRow>
    </VContainer>

    <!-- PDF Export Component (Hidden) -->
    <MemoPdfExport ref="pdfExportRef" :memo="memoStore.currentMemo" />

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
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import MemoForm from '~/components/MemoForm.vue'
import MemoPdfExport from '~/components/MemoPdfExport.vue'
import { useMemoStore } from '~/stores/memo'

definePageMeta({
  layout: 'default',
})

const route = useRoute()
const memoStore = useMemoStore()
const pdfExportRef = ref<InstanceType<typeof MemoPdfExport>>()
const isViewMode = ref(false)

const snackbar = ref({
  show: false,
  message: '',
  color: 'success',
})

const hasAnyPurpose = computed(() => {
  const p = memoStore.currentMemo.purposes
  return p.consider || p.know || p.issueCommand || p.continue
})

const hasAnyAction = computed(() => {
  const a = memoStore.currentMemo.actions
  return a.follow || a.considerReturn || a.copyStores || a.returnCopies ||
    a.forApproval || a.toConsider || a.toKnow || a.other
})

const formatDate = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear() + 543
  return `${day}/${month}/${year}`
}

const showSnackbar = (message: string, color: string = 'success') => {
  snackbar.value = {
    show: true,
    message,
    color,
  }
}

const toggleEditMode = () => {
  isViewMode.value = !isViewMode.value
}

const handleSave = () => {
  try {
    memoStore.saveMemo()
    showSnackbar('บันทึกสำเร็จ!', 'success')
    isViewMode.value = true
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
  if (confirm('คุณต้องการยกเลิกการแก้ไขหรือไม่?')) {
    // Reload the memo from saved data
    const memoId = String(route.params.id)
    memoStore.loadMemo(memoId)
    showSnackbar('ยกเลิกการแก้ไขแล้ว', 'info')
  }
}

onMounted(() => {
  // Load memo from store
  const memoId = String(route.params.id)

  // Load saved memos from localStorage first
  memoStore.loadFromStorage()

  // Load the specific memo
  memoStore.loadMemo(memoId)

  // Check if view mode is requested
  if (route.query.mode === 'view') {
    isViewMode.value = true
  }

  // If memo not found, redirect to create page
  if (!memoStore.currentMemo.id) {
    showSnackbar('ไม่พบใบขอซื้อ', 'error')
    setTimeout(() => {
      navigateTo('/memo')
    }, 1000)
  }
})
</script>
