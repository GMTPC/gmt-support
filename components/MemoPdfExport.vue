<template>
  <ClientOnly>
    <!-- Hidden div for PDF generation -->
    <div ref="pdfContent" class="pdf-content" :style="{ position: 'absolute', left: '-9999px', width: '210mm' }">
      <div class="memo-document">
        <!-- Header -->
        <div class="memo-header">
          <div class="company-logo">
            <div class="logo-box">
              <div class="logo-text">TYPMAN TECH CO.,LTD</div>
              <div class="logo-subtext">บริษัท ทิปมันเทค จำกัด</div>
            </div>
          </div>
          <div class="memo-title">
            <h1>MEMO</h1>
          </div>
        </div>

        <!-- Info Section -->
        <div class="memo-info">
          <table class="info-table">
            <tbody>
              <tr>
                <td class="label">จาก (From):</td>
                <td class="value">{{ memo.from }}</td>
                <td class="label">วันที่:</td>
                <td class="value">{{ formatDate(memo.date) }}</td>
              </tr>
              <tr>
                <td class="label">ถึง (To):</td>
                <td class="value">{{ memo.to }}</td>
                <td class="label">เลขที่เอกสาร:</td>
                <td class="value">{{ memo.documentNumber }}</td>
              </tr>
              <tr>
                <td class="label">สำเนา (CC):</td>
                <td class="value" colspan="3">{{ memo.cc }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Purpose Section -->
        <div class="memo-section">
          <div class="section-title">เพื่อ:</div>
          <div class="checkbox-group">
            <label>
              <input type="checkbox" :checked="memo.purposes.consider" disabled>
              เพื่อพิจารณา (To consider)
            </label>
            <label>
              <input type="checkbox" :checked="memo.purposes.know" disabled>
              เพื่อทราบ (To know)
            </label>
            <label>
              <input type="checkbox" :checked="memo.purposes.issueCommand" disabled>
              เพื่อออกคำสั่ง (Issue the command)
            </label>
            <label>
              <input type="checkbox" :checked="memo.purposes.continue" disabled>
              เพื่อดำเนินการ (To continue)
            </label>
          </div>
        </div>

        <!-- Actions Section -->
        <div class="memo-section">
          <div class="checkbox-group">
            <label>
              <input type="checkbox" :checked="memo.actions.follow" disabled>
              ปฏิบัติตาม (Please keep)
            </label>
            <label>
              <input type="checkbox" :checked="memo.actions.considerReturn" disabled>
              พิจารณาแล้วส่งคืน (Please return)
            </label>
            <label>
              <input type="checkbox" :checked="memo.actions.copyStores" disabled>
              ถ่ายสำเนาเก็บไว้ (Please copy stores)
            </label>
            <label>
              <input type="checkbox" :checked="memo.actions.returnCopies" disabled>
              ส่งสำเนาคืน (Please return copies)
            </label>
          </div>
          <div class="checkbox-group">
            <label>
              <input type="checkbox" :checked="memo.actions.forApproval" disabled>
              เพื่ออนุมัติ (For approval)
            </label>
            <label>
              <input type="checkbox" :checked="memo.actions.toConsider" disabled>
              เพื่อพิจารณา (To consider)
            </label>
            <label>
              <input type="checkbox" :checked="memo.actions.toKnow" disabled>
              เพื่อทราบ (To know)
            </label>
            <label>
              <input type="checkbox" :checked="memo.actions.other" disabled>
              อื่นๆ (Other)
              <span v-if="memo.actions.other && memo.otherAction">: {{ memo.otherAction }}</span>
            </label>
          </div>
        </div>

        <!-- Subject and Details -->
        <div class="memo-section">
          <div class="field-row">
            <span class="label">เรื่อง:</span>
            <span class="value">{{ memo.subject }}</span>
          </div>
          <div class="field-row">
            <span class="label">รายละเอียด:</span>
            <span class="value">{{ memo.details }}</span>
          </div>
        </div>

        <!-- Message Content -->
        <div class="memo-content">
          <div class="content-box">
            {{ memo.message }}
          </div>
        </div>

        <!-- Signature Section -->
        <div class="memo-signature">
          <div class="signature-line">
            <div>ผู้รับผิดชอบ/ผู้จัดทำ</div>
            <div class="signature-space">_______________________</div>
          </div>
          <div class="signature-line">
            <div>ผู้อนุมัติ</div>
            <div class="signature-space">_______________________</div>
            <div class="position">ผอ.ฝ่าย ที่ปรึกษาธุรกิจ</div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ref } from 'vue';
import type { MemoData } from '~/stores/memo';

const props = defineProps<{
  memo: MemoData
}>()

const pdfContent = ref<HTMLElement>()

const formatDate = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear() + 543 // Convert to Buddhist year
  return `${day}/${month}/${year}`
}

const exportToPdf = async () => {
  if (!pdfContent.value) {
    console.error('PDF content element not found')
    alert('ไม่พบ element สำหรับสร้าง PDF กรุณาลองใหม่อีกครั้ง')
    return
  }

  try {
    // Temporarily show the content
    pdfContent.value.style.position = 'static'
    pdfContent.value.style.left = '0'

    const canvas = await html2canvas(pdfContent.value, {
      scale: 2,
      useCORS: true,
      logging: false,
      allowTaint: true,
    })

    // Hide it again
    pdfContent.value.style.position = 'absolute'
    pdfContent.value.style.left = '-9999px'

    const imgData = canvas.toDataURL('image/png')

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    })

    const imgWidth = 210 // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)

    // Generate filename
    const docNumber = props.memo.documentNumber || props.memo.id || 'MEMO'
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5)
    const fileName = `MEMO_${docNumber}_${timestamp}.pdf`

    // Create blob and open in new tab
    const pdfBlob = pdf.output('blob')
    const url = URL.createObjectURL(pdfBlob)

    // Open PDF in new tab for preview
    const newWindow = window.open(url, '_blank')

    if (!newWindow) {
      // If popup blocked, show alert
      alert('กรุณาอนุญาต popup เพื่อเปิด PDF')
    }

    // Clean up URL after a delay
    setTimeout(() => URL.revokeObjectURL(url), 60000) // 1 minute
  } catch (error) {
    console.error('Error generating PDF:', error)
    alert(`เกิดข้อผิดพลาดในการสร้าง PDF: ${error}`)
  }
}

defineExpose({
  exportToPdf,
})
</script>

<style scoped>
.pdf-content {
  background: white;
  font-family: Sarabun, Roboto, sans-serif;
}

.memo-document {
  padding: 20mm;
  background: white;
}

.memo-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-block-end: 2px solid #000;
  margin-block-end: 20px;
  padding-block-end: 10px;
}

.company-logo .logo-box {
  display: inline-block;
  border: 2px solid #8b008b;
  padding-block: 10px;
  padding-inline: 20px;
}

.logo-text {
  color: #8b008b;
  font-size: 14pt;
  font-weight: bold;
}

.logo-subtext {
  color: #8b008b;
  font-size: 10pt;
}

.memo-title h1 {
  margin: 0;
  font-size: 24pt;
  font-weight: bold;
  text-align: center;
}

.memo-info {
  margin-block-end: 20px;
}

.info-table {
  border-collapse: collapse;
  inline-size: 100%;
}

.info-table td {
  padding: 5px;
  border: 1px solid #000;
}

.info-table .label {
  background-color: #f5f5f5;
  font-weight: bold;
  inline-size: 15%;
}

.info-table .value {
  inline-size: 35%;
}

.memo-section {
  padding: 10px;
  border: 1px solid #000;
  margin-block-end: 15px;
}

.section-title {
  font-weight: bold;
  margin-block-end: 10px;
}

.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-block-end: 10px;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 5px;
  min-inline-size: 45%;
}

.field-row {
  border-block-end: 1px solid #ccc;
  margin-block-end: 10px;
  padding-block-end: 5px;
}

.field-row .label {
  font-weight: bold;
  margin-inline-end: 10px;
}

.memo-content {
  border: 1px solid #000;
  margin-block: 20px;
  margin-inline: 0;
  min-block-size: 150px;
}

.content-box {
  padding: 15px;
  line-height: 1.6;
  white-space: pre-wrap;
}

.memo-signature {
  display: flex;
  justify-content: space-between;
  margin-block-start: 40px;
}

.signature-line {
  text-align: center;
}

.signature-space {
  margin-block: 40px 5px;
}

.position {
  font-size: 10pt;
  margin-block-start: 5px;
}
</style>
