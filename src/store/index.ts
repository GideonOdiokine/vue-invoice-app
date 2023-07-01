import { createStore } from 'vuex'

export default createStore({
  state: {
    invoiceModal: false,
  },
  getters: {
  },
  mutations: {
    TOGGLE_INVOICE_MODAL(state) {
        state.invoiceModal = !state.invoiceModal
    }
  },
  actions: {
  },
  modules: {
  }
})
