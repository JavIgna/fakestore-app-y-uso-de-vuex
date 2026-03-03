export default ({
  namespaced: true,

  state: {
    cart: []
  },
  
  mutations: {
    ADD_TO_CART(state, producto) {
      const item = state.cart.find(p => p.id === producto.id)

      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...producto, quantity: 1})
      }
    },

    REMOVE_FROM_CART(state, id) {
      state.cart = state.cart.filter(p => p.id !== id)
    }
  },

  getters: {
    cartItems: state => state.cart,
    cartCount: state =>
      state.cart.reduce((acc, item) => acc + item.quantity, 0),
    cartTotal: state =>
      state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  }
})
