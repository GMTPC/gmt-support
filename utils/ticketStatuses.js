export const ticketStatuses = [
  { code: 'draft', label: 'ร่างเอกสาร', group: 'requester' },
  { code: 'pending_approval', label: 'รอหัวหน้าอนุมัติ', group: 'requester' },
  { code: 'rejected', label: 'หัวหน้าไม่อนุมัติ', group: 'requester' },
  { code: 'revised', label: 'แก้ไขตามที่ตีกลับ', group: 'requester' },
  { code: 'approved', label: 'อนุมัติแล้ว', group: 'requester' },
  { code: 'submitted_it', label: 'ส่งเรื่องให้ IT แล้ว', group: 'requester' },

  { code: 'it_received', label: 'IT รับเรื่องแล้ว', group: 'it' },
  { code: 'in_queue', label: 'รอคิวดำเนินการ', group: 'it' },
  { code: 'assigned', label: 'มอบหมายช่าง/ผู้รับผิดชอบ', group: 'it' },
  { code: 'in_progress', label: 'กำลังดำเนินการซ่อม', group: 'it' },
  { code: 'on_hold', label: 'รอดำเนินการ', group: 'it' },
  { code: 'waiting_user', label: 'รอผู้ใช้ตอบกลับ', group: 'it' },
  { code: 'waiting_parts', label: 'รออะไหล่', group: 'it' },

  { code: 'completed', label: 'IT ซ่อมเสร็จ', group: 'after_fix' },
  { code: 'user_confirmation', label: 'รอผู้ใช้ตรวจรับ', group: 'after_fix' },
  { code: 'closed', label: 'ปิดงาน', group: 'after_fix' },

  { code: 'cancelled', label: 'ยกเลิก', group: 'exception' },
  { code: 'not_fixable', label: 'ไม่สามารถซ่อมได้', group: 'exception' },
  { code: 'replaced', label: 'เปลี่ยนอุปกรณ์ใหม่', group: 'exception' },
  { code: 'duplicate', label: 'รายการซ้ำ', group: 'exception' },
  { code: 'invalid', label: 'ข้อมูลเอกสารไม่ถูกต้อง', group: 'exception' },
  { code: 'escalated', label: 'ส่งต่อผู้เชี่ยวชาญ/ระดับถัดไป', group: 'exception' },
]

export function getStatusLabel(code) {
  const s = ticketStatuses.find(i => i.code === code)
  return s ? s.label : code || ''
}

export function getStatusGroup(code) {
  const s = ticketStatuses.find(i => i.code === code)
  return s ? s.group : null
}
