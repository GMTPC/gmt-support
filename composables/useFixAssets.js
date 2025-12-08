import { useFixAssetsStore } from '@/stores/fixAssets'
import { computed } from 'vue'

export default function useFixAssets() {
  const store = useFixAssetsStore()

  // Load tickets from file/backend once (fire-and-forget)
  if (!store.loaded) {
    // components can still await store.load() if needed
    store.load()
  }

  // return small wrapper so consumers get a reactive `loaded` and
  // action functions bound to the store
  return {
    tickets: store.tickets,
    createTicket: (...args) => store.createTicket(...args),
    updateTicket: (...args) => store.updateTicket(...args),
    removeTicket: (...args) => store.removeTicket(...args),
    getTicket: (id) => store.getTicket(id),
    load: () => store.load(),
    loaded: computed(() => store.loaded),
  }
}
