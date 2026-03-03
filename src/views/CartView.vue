<template>
  <div class="container mt-4">
    <h2>Carrito de compras</h2>

    <router-link to="/" class="btn btn-secondary mb-3">
      Volver
    </router-link>

    <div v-if="cart.length === 0">
      Carrito vacío
    </div>

    <div v-else>
      <div class="card mb-2" v-for="item in cart" :key="item.id">
        <div class="card-body d-flex justify-content-between">
          <div>
            <h5>{{ item.title }}</h5>
            <p>
              Cantidad: {{ item.quantity }} | ${{ item.price }}
            </p>
          </div>

          <button class="btn btn-danger" @click="remove(item.id)">
            Eliminar Producto
          </button>
        </div>
      </div>
      <h4>Total: ${{ total.toFixed(2) }} </h4>
    </div>
  </div>

</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();

    const cart = computed(
      () => store.getters['cart/cartItems']
    )

    const total = computed(
      () => store.getters['cart/cartTotal']
    )

    // id es parametro, como solo es uno, puede ir sin parentesis
    const remove = id => {
      store.commit('cart/REMOVE_FROM_CART', id)
    }

    return {
      cart,
      total,
      remove
    }
  }
}
</script>
