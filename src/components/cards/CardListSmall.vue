<template>
  <div class="card-list-small">
    <card-item-small v-for="(item, index) in cartItems" :item="item" :key="index"></card-item-small>
  </div>
</template>

<script>
import QuantityCounter from '@/components/UI/QuantityCounter.vue';
import CardItemSmall from '@/components/cards/CardItemSmall.vue';

export default {
  name: 'card-list-small',
  components: {
    QuantityCounter,
    CardItemSmall
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    getCartItemQuantity() {
      return this.$store.getters.getCartItemQuantity;
    }
  },
  methods: {
    removeFromCart(item) {
      this.$store.commit('removeFromCart', item);
    }
  }
};
</script>

<style scoped></style>