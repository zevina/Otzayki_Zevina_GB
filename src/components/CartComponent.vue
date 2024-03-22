<template>
  <div class="cart-component">
    <div class="cart-component__empty" v-if="cartItems.length === 0">Корзина пуста</div>
    <div v-else>
      <card-list-small :items="cartItems" @quantity-updated="handleQuantityUpdated"></card-list-small>
      <div class="cart-component__down">
        <div class="cart-component__buttons">
          <my-button class="cart-component__btn" @click="clearCart">Очистить корзину</my-button>
          <my-button class="cart-component__btn" @click="$router.push('/mochi')">в меню вкусов</my-button>
        </div>
        <div class="cart-component__sum">
          <p class="cart-component__title">Итоговая сумма:</p>
          <p class="cart-component__money">{{ totalAmount }} руб</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardListSmall from '@/components/cards/CardListSmall.vue';
import MyButton from '@/components/UI/buttons/MyButton.vue';

export default {
  components: {
    CardListSmall,
    MyButton
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    totalAmount() {
      let total = 0;
      for (const item of this.cartItems) {
        total += item.price * item.quantity;
      }
      return total;
    }
  },
  methods: {
    clearCart() {
      this.$store.commit('clearCart');
    },
    handleQuantityUpdated() {
      let total = 0;
      for (const item of this.cartItems) {
        total += item.price * item.quantity;
      }
      this.$store.commit('updateTotalAmount', total);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/cartcomponent";
</style>