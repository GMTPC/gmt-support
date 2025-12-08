import { defineStore } from 'pinia'

export interface MemoData {
  id: string
  from: string
  to: string
  cc: string
  date: string
  documentNumber: string
  subject: string
  details: string
  message: string
  purposes: {
    consider: boolean
    know: boolean
    issueCommand: boolean
    continue: boolean
  }
  actions: {
    follow: boolean
    considerReturn: boolean
    copyStores: boolean
    returnCopies: boolean
    forApproval: boolean
    toConsider: boolean
    toKnow: boolean
    other: boolean
  }
  otherAction: string
  createdAt: string
  updatedAt: string
}

export const useMemoStore = defineStore('memo', {
  state: () => ({
    currentMemo: {
      id: '',
      from: '',
      to: '',
      cc: '',
      date: new Date().toISOString().split('T')[0],
      documentNumber: '',
      subject: '',
      details: '',
      message: '',
      purposes: {
        consider: false,
        know: false,
        issueCommand: false,
        continue: false,
      },
      actions: {
        follow: false,
        considerReturn: false,
        copyStores: false,
        returnCopies: false,
        forApproval: false,
        toConsider: false,
        toKnow: false,
        other: false,
      },
      otherAction: '',
      createdAt: '',
      updatedAt: '',
    } as MemoData,
    savedMemos: [] as MemoData[],
  }),
  
  actions: {
    saveMemo() {
      const now = new Date().toISOString()
      
      if (!this.currentMemo.id) {
        // New memo
        this.currentMemo.id = `MEMO-${Date.now()}`
        this.currentMemo.createdAt = now
      }
      
      this.currentMemo.updatedAt = now
      
      // Find existing memo index
      const existingIndex = this.savedMemos.findIndex(m => m.id === this.currentMemo.id)
      
      if (existingIndex >= 0) {
        // Update existing memo
        this.savedMemos[existingIndex] = { ...this.currentMemo }
      } else {
        // Add new memo
        this.savedMemos.push({ ...this.currentMemo })
      }
      
      // Save to localStorage
      this.persistToStorage()
      
      return this.currentMemo.id
    },
    
    loadMemo(id: string) {
      const memo = this.savedMemos.find(m => m.id === id)
      if (memo) {
        this.currentMemo = { ...memo }
      }
    },
    
    deleteMemo(id: string) {
      this.savedMemos = this.savedMemos.filter(m => m.id !== id)
      this.persistToStorage()
    },
    
    resetCurrentMemo() {
      this.currentMemo = {
        id: '',
        from: '',
        to: '',
        cc: '',
        date: new Date().toISOString().split('T')[0],
        documentNumber: '',
        subject: '',
        details: '',
        message: '',
        purposes: {
          consider: false,
          know: false,
          issueCommand: false,
          continue: false,
        },
        actions: {
          follow: false,
          considerReturn: false,
          copyStores: false,
          returnCopies: false,
          forApproval: false,
          toConsider: false,
          toKnow: false,
          other: false,
        },
        otherAction: '',
        createdAt: '',
        updatedAt: '',
      }
    },
    
    persistToStorage() {
      if (typeof window !== 'undefined') {
        localStorage.setItem('memos', JSON.stringify(this.savedMemos))
      }
    },
    
    loadFromStorage() {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('memos')
        if (stored) {
          try {
            this.savedMemos = JSON.parse(stored)
          } catch (e) {
            console.error('Failed to load memos from storage:', e)
          }
        }
      }
    },
  },
})
