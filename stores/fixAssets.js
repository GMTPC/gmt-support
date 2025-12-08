import { defineStore } from 'pinia'

export const useFixAssetsStore = defineStore('fixAssets', {
  state: () => ({
    tickets: [],
    loaded: false,
  }),

  actions: {
    // ensure tickets is an array and seed sample data when empty (fallback)
    normalize() {
      if (!this.tickets) this.tickets = []
      if (!Array.isArray(this.tickets)) {
        try {
          const raw = this.tickets
          if (raw && typeof raw === 'object') {
            this.tickets = Object.values(raw).filter(Boolean)
          } else {
            this.tickets = []
          }
        } catch (e) {
          this.tickets = []
        }
      }

      if (!this.tickets || this.tickets.length === 0) {
        this.tickets = [
          {
            id: (Date.now() - 2000).toString(),
            title: 'ทดสอบ: ติดตั้งเครื่องพิมพ์',
            description: 'เครื่องพิมพ์ชำรุด ปริ้นไม่ได้ ต้องการตรวจสอบและเปลี่ยนชิ้นส่วน',
            priority: 'High',
            fileName: null,
            status: 'draft',
            createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
          },
          {
            id: (Date.now() - 100).toString(),
            title: 'ทดสอบ: ปรับปรุงระบบเครือข่าย',
            description: 'สลับ switch บนชั้น 3 และทดสอบความเร็ว',
            priority: 'Normal',
            fileName: null,
            status: 'submitted_it',
            createdAt: new Date().toISOString(),
          },
        ]
      }
    },

    // load from server (file-backed API). If API fails, normalize fallback
    async load() {
      // protect against hanging requests by timing out
      const timeoutMs = 5000
      try {
        const res = await Promise.race([
          $fetch('/api/tickets'),
          new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), timeoutMs)),
        ])
        this.tickets = res || []
      } catch (e) {
        // fallback to local seeded data
        // log briefly for debugging
        // eslint-disable-next-line no-console
        console.warn('Failed to load tickets, using fallback:', e && e.message)
        this.normalize()
      } finally {
        this.loaded = true
      }
      return this.tickets
    },

    async createTicket(payload) {
      try {
        const res = await $fetch('/api/tickets', { method: 'POST', body: payload })
        this.tickets.unshift(res)
        return res
      } catch (e) {
        // fallback local create
        const t = {
          id: Date.now().toString(),
          title: payload.title || '',
          description: payload.description || '',
          priority: payload.priority || 'Normal',
          status: payload.status || 'draft',
          fileName: payload.fileName || null,
          createdAt: new Date().toISOString(),
        }
        this.tickets.unshift(t)
        return t
      }
    },

    async updateTicket(id, payload) {
      try {
        const res = await $fetch(`/api/tickets/${id}`, { method: 'PUT', body: payload })
        const idx = this.tickets.findIndex(t => String(t.id) === String(id))
        if (idx !== -1) this.tickets[idx] = res
        return res
      } catch (e) {
        const idx = this.tickets.findIndex(t => String(t.id) === String(id))
        if (idx === -1) return null
        this.tickets[idx] = { ...this.tickets[idx], ...payload }
        return this.tickets[idx]
      }
    },

    async removeTicket(id) {
      try {
        const res = await $fetch(`/api/tickets/${id}`, { method: 'DELETE' })
        this.tickets = this.tickets.filter(t => String(t.id) !== String(id))
        return res
      } catch (e) {
        this.tickets = this.tickets.filter(t => String(t.id) !== String(id))
        return { success: true }
      }
    },

    getTicket(id) {
      return this.tickets.find(t => String(t.id) === String(id)) || null
    },
  },
})
