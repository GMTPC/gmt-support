<script setup>
import { useHead } from '#imports'
import { inject, ref } from 'vue'

useHead({ title: 'Projects - GMT SUPPORT' })

const projects = inject('projects')
const selected = inject('selectedProject')

const name = ref('')
const desc = ref('')

function saveDetails() {
  if (!selected || !selected.value) return
  selected.value.description = desc.value
  // simple inline save - in real app send to API
  // eslint-disable-next-line no-alert
  alert('บันทึกเรียบร้อย')
}
</script>

<template>
  <div>
    <VCard>
      <VCardTitle>ข้อมูลโปรเจกต์</VCardTitle>
      <VCardText>
        <div v-if="!selected || !selected.value">โปรดเลือกโปรเจกต์จากเมนูด้านซ้าย</div>

        <div v-else>
          <div class="mb-2"><strong>ชื่อ:</strong> {{ selected.value.name }}</div>
          <VTextField v-model="selected.value.name" label="ชื่อโปรเจกต์" />
          <VTextarea v-model="desc" label="รายละเอียดเพิ่มเติม" rows="4" :placeholder="selected.value.description || ''" />
          <div class="mt-3">
            <VBtn color="primary" @click="saveDetails">บันทึก</VBtn>
          </div>
        </div>
      </VCardText>
    </VCard>

    <div class="mt-4">
      <VCard>
        <VCardTitle>รายการโปรเจกต์</VCardTitle>
        <VCardText>
          <VList v-if="projects && projects.value.length">
            <VListItem v-for="p in projects.value" :key="p.id">
              <VListItemContent>
                <VListItemTitle>{{ p.name }}</VListItemTitle>
                <VListItemSubtitle>{{ p.status }}</VListItemSubtitle>
              </VListItemContent>
            </VListItem>
          </VList>
          <div v-else>ยังไม่มีโปรเจกต์</div>
        </VCardText>
      </VCard>
    </div>
  </div>
</template>

<layout name="project" />

<style scoped>
.mt-4 { margin-top: 1rem; }
.mb-2 { margin-bottom: 0.5rem; }
</style>
