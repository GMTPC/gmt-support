<template>
  <div class="project-layout">
    <VRow>
      <VCol cols="12" md="3">
        <VCard>
          <VCardTitle>Project Manager</VCardTitle>
          <VCardText>
            <VList nav dense>
              <VListItem
                v-for="p in projects"
                :key="p.id"
                :class="{ 'bg-lighten-4': selected && selected.id === p.id }"
                @click="select(p)"
              >
                <VListItemContent>
                  <VListItemTitle>{{ p.name }}</VListItemTitle>
                  <VListItemSubtitle>{{ p.status }}</VListItemSubtitle>
                </VListItemContent>
              </VListItem>
            </VList>
            <div class="mt-4">
              <VBtn color="primary" block @click="createProject">สร้างโปรเจกต์</VBtn>
            </div>
          </VCardText>
        </VCard>
      </VCol>

      <VCol cols="12" md="9">
        <slot />
      </VCol>
    </VRow>
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'

const projects = ref([
  { id: 1, name: 'GMT Portal', status: 'Active' },
  { id: 2, name: 'Support Dashboard', status: 'Planning' },
])

const selected = ref(projects.value[0] || null)

function select(p) {
  selected.value = p
}

function createProject() {
  const name = window.prompt('ชื่อโปรเจกต์ใหม่')
  if (!name) return
  const p = { id: Date.now(), name, status: 'New' }
  projects.value.unshift(p)
  selected.value = p
}

provide('projects', projects)
provide('selectedProject', selected)
</script>

<style scoped>
.project-layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
