<script setup>
import { useHead, useRouter } from '#imports'
import useFixAssets from '@/composables/useFixAssets'
import { ref } from 'vue'

useHead({ title: 'แจ้งซ่อมใหม่ - GMT SUPPORT' })

const { createTicket } = useFixAssets()
const router = useRouter()
const formRef = ref(null)

const titleRules = [(v) => !!v || 'กรุณากรอกหัวข้อ']

const title = ref('')
const description = ref('')
const priority = ref('Normal')
const file = ref(null)

async function submit() {
  // validate title
  const valid = formRef.value ? await formRef.value.validate() : true
  if (!valid) return

  const payload = {
    title: title.value,
    description: description.value,
    priority: priority.value,
    fileName: file.value?.name || null,
  }

  const t = await createTicket(payload)
  if (t && t.id) {
    router.push('/it-service-request')
  }
}
</script>

<template>
  <div class="pa-4">
    <VRow>
      <VCol cols="12">
        <Breadcrumbs :showHome="true"
          :items="[{ text: 'แจ้งซ่อม', to: '/it-service-request' }, { text: 'แจ้งซ่อมใหม่' }]" />
        <VCard class="card-form" style="width:100%">
          <VCardTitle>
            <div>
              <div class="h5">แจ้งซ่อมใหม่</div>
              <div class="text-muted">กรุณากรอกข้อมูลให้ครบถ้วน ทีม IT จะติดต่อตอบกลับ</div>
            </div>
          </VCardTitle>

          <VCardText class="card-body">
            <VForm ref="formRef" @submit.prevent="submit">
              <VRow>
                <VCol cols="12">
                  <VTextField v-model="title" label="หัวข้อ" :rules="titleRules" required />
                </VCol>

                <VCol cols="12">
                  <VTextarea v-model="description" label="รายละเอียด" rows="6" />
                </VCol>


                <VCol cols="12" md="4">
                  <VSelect v-model="priority" :items="['Low', 'Normal', 'High', 'Urgent']" label="ความสำคัญ" />
                </VCol>

                <VCol cols="12" md="4">
                  <VFileInput v-model="file" label="แนบไฟล์ (ถ้ามี)" show-size />
                </VCol>
              </VRow>
            </VForm>
          </VCardText>

          <VDivider />

          <VCardActions>
            <VCol cols="12">
              <VBtn type="submit" color="primary" class="btn  me-2">
                ส่งคำขอ
              </VBtn>

              <VBtn color="secondary" type="reset" variant="tonal"
                @click="title = ''; description = ''; priority = 'Normal'; file = null">
                ล้าง
              </VBtn>
            </VCol>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
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

/* Inputs spacing: make consistent vertical rhythm */
.card-body .v-input,
.card-body .v-textarea,
.card-body .v-select,
.card-body .v-file-input {
  margin-bottom: 1rem;
}

/* Tighten title area spacing */
.card-form .v-card__title {
  padding-bottom: 0.5rem;
}

/* Make actions stand out and spaced from form */
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
