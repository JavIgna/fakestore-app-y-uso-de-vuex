import { getProducts } from "@/api/products";

export default ({
  namespaced: true,

  state: {
    products: [],
    loading: false
  },
  
  // en español lo que viene de fuera como parametro
  mutations: {
    SET_PRODUCTS(state, productos) {
      state.products = productos
    },
    SET_LOADING(state, estado) {
      state.loading = estado
    }
  },

  actions: {
    async fetchProducts({commit}) {
      commit('SET_LOADING', true)
      try {
        const res = await getProducts()
        commit('SET_PRODUCTS', res.data)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  },

  getters: {
    allProducts: state => state.products
  }
})
