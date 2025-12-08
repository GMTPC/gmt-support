<template>
    <VCard>
        <VCardText>
            <VForm ref="formRef">
                <!-- Header Section -->
                <VRow>
                    <VCol cols="12" md="6">
                        <VTextField v-model="memo.from" label="จาก (From)" density="comfortable"
                            :rules="[requiredRule]" />
                    </VCol>
                    <VCol cols="12" md="6">
                        <VTextField v-model="memo.to" label="ถึง (To)" density="comfortable" :rules="[requiredRule]" />
                    </VCol>
                </VRow>

                <VRow>
                    <VCol cols="12" md="6">
                        <VTextField v-model="memo.cc" label="สำเนา (CC)" density="comfortable" />
                    </VCol>
                    <VCol cols="12" md="3">
                        <VTextField v-model="memo.date" label="วันที่ (Date)" type="date" density="comfortable"
                            :rules="[requiredRule]" />
                    </VCol>
                    <VCol cols="12" md="3">
                        <VTextField v-model="memo.documentNumber" label="เลขที่เอกสาร" density="comfortable" />
                    </VCol>
                </VRow>

                <!-- Purpose Section -->
                <VRow>
                    <VCol cols="12">
                        <div class="text-subtitle-2 mb-2">
                            เพื่อ (Purpose):
                        </div>
                        <VRow dense>
                            <VCol cols="12" sm="6" md="3">
                                <VCheckbox v-model="memo.purposes.consider" label="เพื่อพิจารณา (To consider)"
                                    density="compact" hide-details />
                            </VCol>
                            <VCol cols="12" sm="6" md="3">
                                <VCheckbox v-model="memo.purposes.know" label="เพื่อทราบ (To know)" density="compact"
                                    hide-details />
                            </VCol>
                            <VCol cols="12" sm="6" md="3">
                                <VCheckbox v-model="memo.purposes.issueCommand" label="เพื่อออกคำสั่ง (Issue command)"
                                    density="compact" hide-details />
                            </VCol>
                            <VCol cols="12" sm="6" md="3">
                                <VCheckbox v-model="memo.purposes.continue" label="เพื่อดำเนินการ (To continue)"
                                    density="compact" hide-details />
                            </VCol>
                        </VRow>
                    </VCol>
                </VRow>

                <!-- Actions Section -->
                <VRow class="mt-2">
                    <VCol cols="12">
                        <div class="text-subtitle-2 mb-2">
                            การดำเนินการ (Actions):
                        </div>
                        <VRow dense>
                            <VCol cols="12" sm="6" md="3">
                                <VCheckbox v-model="memo.actions.follow" label="ปฏิบัติตาม (Please keep)"
                                    density="compact" hide-details />
                            </VCol>
                            <VCol cols="12" sm="6" md="3">
                                <VCheckbox v-model="memo.actions.considerReturn"
                                    label="พิจารณาแล้วส่งคืน (Please return)" density="compact" hide-details />
                            </VCol>
                            <VCol cols="12" sm="6" md="3">
                                <VCheckbox v-model="memo.actions.copyStores" label="ถ่ายสำเนาเก็บไว้ (Copy stores)"
                                    density="compact" hide-details />
                            </VCol>
                            <VCol cols="12" sm="6" md="3">
                                <VCheckbox v-model="memo.actions.returnCopies" label="ส่งสำเนาคืน (Return copies)"
                                    density="compact" hide-details />
                            </VCol>
                            <VCol cols="12" sm="6" md="3">
                                <VCheckbox v-model="memo.actions.forApproval" label="เพื่ออนุมัติ (For approval)"
                                    density="compact" hide-details />
                            </VCol>
                            <VCol cols="12" sm="6" md="3">
                                <VCheckbox v-model="memo.actions.toConsider" label="เพื่อพิจารณา (To consider)"
                                    density="compact" hide-details />
                            </VCol>
                            <VCol cols="12" sm="6" md="3">
                                <VCheckbox v-model="memo.actions.toKnow" label="เพื่อทราบ (To know)" density="compact"
                                    hide-details />
                            </VCol>
                            <VCol cols="12" sm="6" md="3">
                                <VCheckbox v-model="memo.actions.other" label="อื่นๆ (Other)" density="compact"
                                    hide-details />
                            </VCol>
                        </VRow>
                    </VCol>
                </VRow>

                <!-- Other Action -->
                <VRow v-if="memo.actions.other" class="mt-2">
                    <VCol cols="12">
                        <VTextField v-model="memo.otherAction" label="ระบุการดำเนินการอื่นๆ" density="comfortable" />
                    </VCol>
                </VRow>

                <!-- Subject and Details -->
                <VRow class="mt-4">
                    <VCol cols="12">
                        <VTextField v-model="memo.subject" label="เรื่อง (Subject)" density="comfortable"
                            :rules="[requiredRule]" />
                    </VCol>
                </VRow>

                <VRow>
                    <VCol cols="12">
                        <VTextField v-model="memo.details" label="รายละเอียด (Details)" density="comfortable" />
                    </VCol>
                </VRow>

                <!-- Message/Content Area -->
                <VRow>
                    <VCol cols="12">
                        <VTextarea v-model="memo.message" label="ข้อความ/เนื้อหา (Message/Content)" rows="8"
                            :rules="[requiredRule]" />
                    </VCol>
                </VRow>

                <!-- Action Buttons -->
                <VRow class="mt-4">
                    <VCol cols="12" class="d-flex gap-2">
                        <VBtn color="primary" size="large" @click="handleSave">
                            <VIcon start icon="bx-save" />
                            บันทึก (Save)
                        </VBtn>
                        <VBtn color="success" size="large" :disabled="!isSaved" @click="handleExportPdf">
                            <VIcon start icon="bxs-file-pdf" />
                            Export PDF
                        </VBtn>
                        <VBtn color="secondary" size="large" variant="outlined" @click="handleReset">
                            <VIcon start icon="bx-reset" />
                            รีเซ็ต (Reset)
                        </VBtn>
                    </VCol>
                </VRow>
            </VForm>
        </VCardText>
    </VCard>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { MemoData } from '~/stores/memo';

const props = defineProps<{
    memo: MemoData
    isSaved: boolean
}>()

const emit = defineEmits<{
    save: []
    exportPdf: []
    reset: []
}>()

const formRef = ref()

const requiredRule = (v: string) => !!v || 'ฟิลด์นี้จำเป็นต้องกรอก'

const handleSave = async () => {
    const { valid } = await formRef.value.validate()
    if (valid) {
        emit('save')
    }
}

const handleExportPdf = () => {
    emit('exportPdf')
}

const handleReset = () => {
    emit('reset')
    formRef.value?.resetValidation()
}
</script>
