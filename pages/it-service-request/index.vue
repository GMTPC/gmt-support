<script setup>
import { useHead } from '#imports';
import useFixAssets from '@/composables/useFixAssets';
import { useFixAssetsStore } from '@/stores/fixAssets';
import { getStatusGroup, getStatusLabel, ticketStatuses } from '@/utils/ticketStatuses';
import { computed, ref, unref } from 'vue';

useHead({ title: 'รายการแจ้งซ่อม - GMT SUPPORT' })

// Server-prefetch tickets so SSR and client hydrate with same data
const _store = useFixAssetsStore()
if (!_store.loaded) await _store.load()

const { tickets, removeTicket, loaded } = useFixAssets()

const search = ref('')
const priorityFilter = ref('All')

const priorities = ['All', 'Low', 'Normal', 'High', 'Urgent']

const statusFilter = ref('All')
const statusOptions = [{ code: 'All', label: 'ทั้งหมด' }, ...ticketStatuses.map(s => ({ code: s.code, label: s.label }))]

const filteredTickets = computed(() => {
    const list = unref(tickets) || []
    const s = search.value.trim().toLowerCase()
    return list.filter(t => {
        const matchesSearch = !s || [t.title, t.description, t.priority].filter(Boolean).join(' ').toLowerCase().includes(s)
        const matchesPriority = priorityFilter.value === 'All' || t.priority === priorityFilter.value
        const matchesStatus = statusFilter.value === 'All' || t.status === statusFilter.value
        return matchesSearch && matchesPriority && matchesStatus
    })
})

const headers = [
    { title: 'ลำดับ', value: 'index', align: 'center', width: 80 },
    { title: 'หัวข้อ', value: 'title' },
    { title: 'วันที่', value: 'createdAt' },
    { title: 'สถานะ', value: 'status' },
    { title: 'ความสำคัญ', value: 'priority' },
    { title: 'การกระทำ', value: 'actions', width: 180 },
]

const priorityMap = {
    Low: { color: 'info', textColor: 'white' },
    Normal: { color: 'secondary', textColor: 'white' },
    High: { color: 'warning', textColor: 'white' },
    Urgent: { color: 'error', textColor: 'white' },
}

const statusMap = {
    requester: { color: 'secondary', textColor: 'white' },
    it: { color: 'info', textColor: 'white' },
    after_fix: { color: 'success', textColor: 'white' },
    exception: { color: 'error', textColor: 'white' },
}

function chipForPriority(p) {
    return priorityMap[p] || { color: 'secondary', textColor: 'white' }
}

function chipForStatus(code) {
    const group = getStatusGroup(code) || 'requester'
    return statusMap[group] || { color: 'secondary', textColor: 'white' }
}

function getStatusLabelFromCode(code) {
    return getStatusLabel(code)
}

function pad(n) {
    return String(n).padStart(2, '0')
}

// deterministic UTC formatter to avoid locale/timezone mismatches
function formatIsoDate(iso) {
    if (!iso) return ''
    const d = new Date(iso)
    return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`
}

// deletion dialog state & handlers
const deleteDialog = ref(false)
const deleting = ref(false)
const toDelete = ref(null)

function openDelete(item) {
    toDelete.value = item
    deleteDialog.value = true
}

async function confirmDelete() {
    if (!toDelete.value) return
    deleting.value = true
    try {
        await removeTicket(toDelete.value.id)
    } catch (e) {
        // swallow - store already falls back to local removal
        console.error('Delete failed', e)
    } finally {
        deleting.value = false
        deleteDialog.value = false
        toDelete.value = null
    }
}
</script>

<template>
    <div class="pa-4">
        <VRow>
            <VCol cols="12">
                <Breadcrumbs :showHome="true" :items="[{ text: 'แจ้งซ่อม', to: '/it-service-request' }]" />

                <VCard class="card-form">
                    <VProgressLinear v-if="!loaded" indeterminate color="primary" height="4" class="mb-3" />
                    <VCardTitle class="d-flex align-center justify-space-between">
                        <div>รายการแจ้งซ่อม</div>
                        <div>
                            <NuxtLink to="/it-service-request/create">
                                <VBtn color="primary" class="me-2">แจ้งซ่อมใหม่</VBtn>
                            </NuxtLink>
                        </div>
                    </VCardTitle>

                    <VCardText class="card-body">
                        <VRow class="mb-4" align="center">
                            <VCol cols="12" md="5">
                                <VTextField v-model="search" label="ค้นหา (หัวข้อ, รายละเอียด)" clearable
                                    prepend-inner-icon="bx-search" />
                            </VCol>

                            <VCol cols="12" md="3">
                                <VSelect v-model="priorityFilter" :items="priorities" label="ความสำคัญ" />
                            </VCol>

                            <VCol cols="12" md="2">
                                <VSelect v-model="statusFilter" :items="statusOptions" item-title="label"
                                    item-value="code" label="สถานะ" />
                            </VCol>

                            <VCol cols="12" md="2" class="text-end">
                                <VBtn variant="tonal"
                                    @click="search = ''; priorityFilter = 'All'; statusFilter = 'All'">รีเซ็ต</VBtn>
                            </VCol>
                        </VRow>

                        <div v-if="!filteredTickets || filteredTickets.length === 0" class="text-center py-6">
                            ยังไม่มีคำขอตามเงื่อนไข
                        </div>
                        <VDataTable v-else :items="filteredTickets" :headers="headers" class="my-data-table"
                            density="comfortable" sticky>
                            <template #item.title="{ item }">
                                <div>
                                    <div class="fw-600">{{ item.title }}</div>
                                    <div class="text-muted small">{{ item.description }}</div>
                                </div>
                            </template>

                            <template #item.index="{ item }">
                                <div class="text-center">{{filteredTickets.findIndex(i => i.id === item.id) + 1}}</div>
                            </template>

                            <template #item.createdAt="{ item }">
                                <div class="text-center small">{{ formatIsoDate(item.createdAt) }}</div>
                            </template>

                            <template #item.status="{ item }">
                                <div class="text-center">
                                    <VChip size="small" :color="chipForStatus(item.status).color"
                                        :text-color="chipForStatus(item.status).textColor">
                                        {{ getStatusLabelFromCode(item.status) }}
                                    </VChip>
                                </div>
                            </template>

                            <template #item.priority="{ item }">
                                <div>
                                    <VChip size="small" :color="chipForPriority(item.priority).color"
                                        :text-color="chipForPriority(item.priority).textColor">
                                        {{ item.priority }}
                                    </VChip>
                                </div>
                            </template>

                            <template #item.actions="{ item }">
                                <NuxtLink :to="`/it-service-request/update/${item.id}`">
                                    <VBtn variant="outlined" size="small" class="me-2">แก้ไข</VBtn>
                                </NuxtLink>
                                <VBtn color="error" variant="text" size="small" @click.prevent="openDelete(item)">ลบ
                                </VBtn>
                            </template>
                        </VDataTable>
                        <!-- Delete confirmation dialog -->
                        <VDialog v-model="deleteDialog" max-width="480">
                            <VCard>
                                <VCardTitle>ยืนยันการลบ</VCardTitle>
                                <VCardText>คุณแน่ใจว่าจะลบคำขอนี้: <strong>{{ toDelete ? toDelete.title : '' }}</strong>
                                    ?</VCardText>
                                <VCardActions class="justify-end">
                                    <VBtn variant="text" @click="deleteDialog = false; toDelete = null">ยกเลิก</VBtn>
                                    <VBtn color="error" :loading="deleting" @click="confirmDelete">ลบ</VBtn>
                                </VCardActions>
                            </VCard>
                        </VDialog>
                    </VCardText>
                </VCard>
            </VCol>
        </VRow>
    </div>
</template>

<style scoped>
.page-wrapper {
    max-width: 1200px;
    margin: 0 auto;
}

.mb-3 {
    margin-bottom: 1rem
}

.fw-600 {
    font-weight: 600;
}

.text-muted {
    color: rgba(0, 0, 0, 0.6);
}

/* card form styles match create/update */
.card-form {
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04);
}

.card-body {
    padding-top: 0.5rem;
    padding-bottom: 0.75rem;
}

.my-data-table .v-data-table__wrapper {
    max-height: 60vh;
}

.my-data-table .v-data-table-header th {
    font-weight: 600;
}
</style>
