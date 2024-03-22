<template>
  <div class="card-item-small">
    <div class="card-item__left">
      <img class="card-item__img" :src="item.image2" alt="Mochi image">
    </div>
    <div class="card-item__right">
      <button class="card-item__remove" @click="removeFromCart(item)">
        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8L8 16M8.00001 8L16 16" stroke="grey" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </button>
      <div class="card-item__info">
        <p class="card-item__name">{{ item.name }}</p>
        <p class="card-item__price">{{ item.price }} руб</p>
      </div>
      <quantity-counter class="card-item__counter" :value="getCartItemQuantity(item)" v-model="quantity" :min="1"
        @input="updateQuantity"></quantity-counter>
    </div>
  </div>
</template>

<script>
import QuantityCounter from '@/components/UI/QuantityCounter.vue';

export default {
  components: {
    QuantityCounter
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      quantity: this.$store.getters.getCartItemQuantity
    }
  },
  computed: {
    getCartItemQuantity() {
      return this.$store.getters.getCartItemQuantity;
    }
  },
  methods: {
    removeFromCart(item) {
      this.$store.commit('removeFromCart', item);
    },
    updateQuantity(newQuantity) {
      this.quantity = newQuantity;
      this.$store.commit('updateCartItemQuantity', {
        item: this.item,
        quantity: newQuantity
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/cardsmall";
</style>