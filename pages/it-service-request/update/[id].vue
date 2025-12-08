<script setup>
import { useHead, useRoute, useRouter } from '#imports'
import useFixAssets from '@/composables/useFixAssets'
import { ref, watchEffect } from 'vue'

const route = useRoute()
const router = useRouter()
const { getTicket, updateTicket, removeTicket } = useFixAssets()

const id = route.params.id
const ticket = ref(null)

watchEffect(() => {
  if (!id) return
  ticket.value = getTicket(id)
})

useHead({ title: ticket.value ? `${ticket.value.title} - GMT SUPPORT` : 'แก้ไขแจ้งซ่อม - GMT SUPPORT' })

const formRef = ref(null)

const title = ref('')
const description = ref('')
const priority = ref('Normal')
const file = ref(null)

const titleRules = [(v) => !!v || 'กรุณากรอกหัวข้อ']

watchEffect(() => {
  if (!ticket.value) return
  title.value = ticket.value.title
  description.value = ticket.value.description
  priority.value = ticket.value.priority || 'Normal'
  file.value = ticket.value.fileName ? { name: ticket.value.fileName } : null
})

async function save() {
  if (!ticket.value) return
  const valid = formRef.value ? await formRef.value.validate() : true
  if (!valid) return
  updateTicket(ticket.value.id, { title: title.value, description: description.value, priority: priority.value, fileName: file.value?.name || null })
  snackbarMessage.value = 'บันทึกเรียบร้อย'
  snackbar.value = true
}

// status transition actions
const transitions = {
  draft: ['pending_approval', 'submitted_it', 'cancelled'],
  pending_approval: ['approved', 'rejected', 'revised', 'cancelled'],
  submitted_it: ['it_received', 'cancelled'],
  it_received: ['in_queue', 'assigned', 'cancelled'],
  in_queue: ['assigned', 'cancelled'],
  assigned: ['in_progress', 'on_hold', 'cancelled'],
  in_progress: ['waiting_user', 'waiting_parts', 'completed', 'cancelled'],
  waiting_user: ['in_progress', 'cancelled'],
  waiting_parts: ['in_progress', 'cancelled'],
  completed: ['user_confirmation', 'closed', 'replaced'],
  user_confirmation: ['closed', 'revised'],
  default: ['cancelled'],
}

function getAllowedTransitions(code) {
  return transitions[code] || transitions.default
}

async function changeStatus(code) {
  if (!ticket.value) return
  try {
    await updateTicket(ticket.value.id, { status: code })
    snackbarMessage.value = `สถานะเปลี่ยนเป็น: ${getStatusLabel(code)}`
    snackbar.value = true
  } catch (e) {
    console.error('Failed to change status', e)
  }
}

// deletion dialog for consistency with list page
const deleteDialog = ref(false)
const deleting = ref(false)
const snackbar = ref(false)
const snackbarMessage = ref('')

function removeSelf() {
  if (!ticket.value) return
  deleteDialog.value = true
}

async function confirmDelete() {
  if (!ticket.value) return
  deleting.value = true
  try {
    await removeTicket(ticket.value.id)
    router.push('/it-service-request')
  } catch (e) {
    console.error('Delete failed', e)
  } finally {
    deleting.value = false
    deleteDialog.value = false
  }
}
</script>

<template>
  <div class="pa-4">
    <VRow>
      <VCol cols="12">
        <Breadcrumbs :showHome="true"
          :items="[{ text: 'แจ้งซ่อม', to: '/it-service-request' }, { text: ticket ? ticket.title : 'แก้ไขแจ้งซ่อม' }]" />

        <VCard v-if="ticket" class="card-form">
          <VCardTitle class="d-flex align-center justify-space-between">
            <div>
              <div class="h5">แก้ไขแจ้งซ่อม</div>
              <div class="text-muted">แก้ไขข้อมูลคำขอของคุณ</div>
            </div>
            <div class="d-flex align-center gap-3">
              <div class="text-muted small">{{ ticket.createdAt }}</div>
              <VChip size="small"
                :color="priority === 'Urgent' ? 'error' : priority === 'High' ? 'warning' : priority === 'Low' ? 'info' : 'secondary'"
                text-color="white">{{ priority }}</VChip>
              <VMenu>
                <template #activator="{ props }">
                  <VBtn v-bind="props" variant="outlined" size="small">การดำเนินการ</VBtn>
                </template>
                <VList>
                  <VListItem v-for="code in getAllowedTransitions(ticket.status)" :key="code"
                    @click="changeStatus(code)">
                    <VListItemTitle>{{ getStatusLabel(code) }}</VListItemTitle>
                  </VListItem>
                </VList>
              </VMenu>
            </div>
          </VCardTitle>

          <VCardText class="card-body">
            <VForm ref="formRef">
              <VRow>
                <VCol cols="12">
                  <VTextField v-model="title" label="หัวข้อ" :rules="titleRules" required />
                </VCol>

                <VCol cols="12">
                  <VTextarea v-model="description" label="รายละเอียด" rows="6" />
                </VCol>

                <VCol cols="12" md="6">
                  <VSelect v-model="priority" :items="['Low', 'Normal', 'High', 'Urgent']" label="ความสำคัญ" />
                </VCol>

                <VCol cols="12" md="6">
                  <VFileInput v-model="file" label="แนบไฟล์ (ถ้ามี)" show-size />
                </VCol>
              </VRow>
            </VForm>
          </VCardText>

          <VDivider />

          <VCardActions class="justify-space-between">
            <div>
              <NuxtLink to="/it-service-request">
                <VBtn variant="text">ยกเลิก</VBtn>
              </NuxtLink>
            </div>

            <div>
              <VBtn color="error" variant="outlined" class="me-2" @click="removeSelf">ลบ</VBtn>
              <VBtn color="primary" elevation="2" @click="save">บันทึก</VBtn>
            </div>
          </VCardActions>
        </VCard>

        <div v-else>
          <VCard style="width:100%">
            <VCardText>ไม่พบคำขอนี้</VCardText>
            <VCardActions>
              <NuxtLink to="/it-service-request">
                <VBtn variant="text">กลับไปยังรายการ</VBtn>
              </NuxtLink>
            </VCardActions>
          </VCard>
        </div>
      </VCol>
    </VRow>
    <!-- delete confirmation dialog -->
    <VDialog v-model:modelValue="deleteDialog" max-width="480">
      <VCard>
        <VCardTitle>ยืนยันการลบ</VCardTitle>
        <VCardText>คุณแน่ใจว่าจะลบคำขอนี้: <strong>{{ ticket ? ticket.title : '' }}</strong> ?</VCardText>
        <VCardActions class="justify-end">
          <VBtn variant="text" @click="deleteDialog = false">ยกเลิก</VBtn>
          <VBtn color="error" :loading="deleting" @click="confirmDelete">ลบ</VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- snackbar for feedback -->
    <VSnackbar v-model:modelValue="snackbar" timeout="3000">{{ snackbarMessage }}</VSnackbar>
  </div>
</template>

<style scoped>
.page-wrapper {
  max-width: 900px;
  margin: 0 auto
}

.card-form {
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
}

.card-body {
  padding-top: 0.25rem;
  padding-bottom: 0.75rem;
}

.card-actions {
  padding: 0.75rem 1rem;
}

.card-body .v-input,
.card-body .v-textarea,
.card-body .v-select,
.card-body .v-file-input {
  margin-bottom: 1rem;
}

.card-form .v-card__title {
  padding-bottom: 0.5rem;
}

.card-form .v-card__actions {
  padding-top: 0.75rem;
}

.text-muted {
  color: rgba(0, 0, 0, 0.6);
}

.h5 {
  font-size: 1.125rem;
  font-weight: 600;
}
</style>
