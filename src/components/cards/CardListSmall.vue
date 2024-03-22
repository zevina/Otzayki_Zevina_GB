<template>
 <div class="card-list-small">
  <div v-if="cartItems.length === 0">Корзина пуста</div>
  <div v-else>
   <div v-for="(item, index) in cartItems" :key="index">
    <img :src="item.image" alt="Item Image">
    <h2>{{ item.name }}</h2>
    <quantity-counter v-model="item.quantity" :min="1" />
    <button @click="removeFromCart(item)">Удалить</button>
   </div>
  </div>
 </div>
</template>

<script>
import QuantityCounter from '@/components/UI/QuantityCounter.vue';

export default {
 name: 'card-list-small',
 components: {
  QuantityCounter
 },
 computed: {
  cartItems() {
   return this.$store.state.cartItems;
  }
 },
 methods: {
  removeFromCart(item) {
   this.$store.commit('removeFromCart', item);
  }
 }
};
</script>

<style scoped>
.card-list-small {
 /* стили для списка карточек товаров в корзине */
}
</style>
