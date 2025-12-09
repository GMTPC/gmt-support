import { defineStore } from 'pinia';
import { computed } from 'vue';

const useFixAssetsStore = defineStore("fixAssets", {
  state: () => ({
    tickets: [],
    loaded: false
  }),
  actions: {
    // ensure tickets is an array and seed sample data when empty (fallback)
    normalize() {
      if (!this.tickets) this.tickets = [];
      if (!Array.isArray(this.tickets)) {
        try {
          const raw = this.tickets;
          if (raw && typeof raw === "object") {
            this.tickets = Object.values(raw).filter(Boolean);
          } else {
            this.tickets = [];
          }
        } catch (e) {
          this.tickets = [];
        }
      }
      if (!this.tickets || this.tickets.length === 0) {
        this.tickets = [
          {
            id: (Date.now() - 2e3).toString(),
            title: "\u0E17\u0E14\u0E2A\u0E2D\u0E1A: \u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1E\u0E34\u0E21\u0E1E\u0E4C",
            description: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E0A\u0E33\u0E23\u0E38\u0E14 \u0E1B\u0E23\u0E34\u0E49\u0E19\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49 \u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E41\u0E25\u0E30\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E0A\u0E34\u0E49\u0E19\u0E2A\u0E48\u0E27\u0E19",
            priority: "High",
            fileName: null,
            status: "draft",
            createdAt: new Date(Date.now() - 1e3 * 60 * 60).toISOString()
          },
          {
            id: (Date.now() - 100).toString(),
            title: "\u0E17\u0E14\u0E2A\u0E2D\u0E1A: \u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E23\u0E30\u0E1A\u0E1A\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22",
            description: "\u0E2A\u0E25\u0E31\u0E1A switch \u0E1A\u0E19\u0E0A\u0E31\u0E49\u0E19 3 \u0E41\u0E25\u0E30\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27",
            priority: "Normal",
            fileName: null,
            status: "submitted_it",
            createdAt: (/* @__PURE__ */ new Date()).toISOString()
          }
        ];
      }
    },
    // load from server (file-backed API). If API fails, normalize fallback
    async load() {
      const timeoutMs = 5e3;
      try {
        const res = await Promise.race([
          $fetch("/api/tickets"),
          new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), timeoutMs))
        ]);
        this.tickets = res || [];
      } catch (e) {
        console.warn("Failed to load tickets, using fallback:", e && e.message);
        this.normalize();
      } finally {
        this.loaded = true;
      }
      return this.tickets;
    },
    async createTicket(payload) {
      try {
        const res = await $fetch("/api/tickets", { method: "POST", body: payload });
        this.tickets.unshift(res);
        return res;
      } catch (e) {
        const t = {
          id: Date.now().toString(),
          title: payload.title || "",
          description: payload.description || "",
          priority: payload.priority || "Normal",
          status: payload.status || "draft",
          fileName: payload.fileName || null,
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        this.tickets.unshift(t);
        return t;
      }
    },
    async updateTicket(id, payload) {
      try {
        const res = await $fetch(`/api/tickets/${id}`, { method: "PUT", body: payload });
        const idx = this.tickets.findIndex((t) => String(t.id) === String(id));
        if (idx !== -1) this.tickets[idx] = res;
        return res;
      } catch (e) {
        const idx = this.tickets.findIndex((t) => String(t.id) === String(id));
        if (idx === -1) return null;
        this.tickets[idx] = { ...this.tickets[idx], ...payload };
        return this.tickets[idx];
      }
    },
    async removeTicket(id) {
      try {
        const res = await $fetch(`/api/tickets/${id}`, { method: "DELETE" });
        this.tickets = this.tickets.filter((t) => String(t.id) !== String(id));
        return res;
      } catch (e) {
        this.tickets = this.tickets.filter((t) => String(t.id) !== String(id));
        return { success: true };
      }
    },
    getTicket(id) {
      return this.tickets.find((t) => String(t.id) === String(id)) || null;
    }
  }
});
function useFixAssets() {
  const store = useFixAssetsStore();
  if (!store.loaded) {
    store.load();
  }
  return {
    tickets: store.tickets,
    createTicket: (...args) => store.createTicket(...args),
    updateTicket: (...args) => store.updateTicket(...args),
    removeTicket: (...args) => store.removeTicket(...args),
    getTicket: (id) => store.getTicket(id),
    load: () => store.load(),
    loaded: computed(() => store.loaded)
  };
}

export { useFixAssetsStore as a, useFixAssets as u };
