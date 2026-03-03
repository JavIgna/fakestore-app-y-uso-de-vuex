<template>
  <div class="container mt-4">
    <h2>Productos</h2>

    <router-link to="/cart" class="btn btn-success mb-3">
      Ir al carrito ({{ cartCount }})
    </router-link>

    <div v-if="loading">Cargando...</div>

    <div class="row">
      <div class="col-md-4 mb-3" v-for="product in products" :key="product.id">
        <div class="card h-100">
          <img :src="product.image" class="card-img-top p-3 img-fluid" />
          <div class="card-body">
            <h5>{{ product.title }}</h5>
            <p>${{ product.price }}</p>
            <button 
              class="btn btn-primary"
              @click="addToCart(product)"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

export default {
  name: 'ProductsView',
  setup() {
    const store = useStore()

    const products = computed(
      () => store.getters['products/allProducts']
    )

    const loading = computed(
      () => store.state.loading
    )

    const cartCount = computed(
      () => store.getters['cart/cartCount']
    )

    onMounted(() => {
      store.dispatch('products/fetchProducts')
    })

    const addToCart = (product) => {
      store.commit('cart/ADD_TO_CART', product)
    }

    return {
      products,
      loading,
      addToCart,
      cartCount
    }
  }
}
</script>
