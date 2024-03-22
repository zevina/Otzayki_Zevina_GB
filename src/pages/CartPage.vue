<template>
  <div class="cart-content">
    <div class="cart center">
      <cart-component></cart-component>
      <order-form></order-form>
    </div>
  </div>
  <div class="delivery-content">
    <div class="delivery center">
      <div class="delivery__left">
        <picture>
          <source media="(min-width: 1200px)" srcset='@/assets/img/cart/cart_bicycle_big.png'>
          <source media="(min-width: 960px)" srcset='@/assets/img/cart/cart_bicycle_middle.png'>
          <img class="delivery__left_img" alt="photo of desserts" src='@/assets/img/cart/cart_bicycle_small.png'>
        </picture>
      </div>
      <div class="delivery__right">
        <p class="delivery__title">Доставка и оплата</p>
        <p class="delivery__text1">Для наших покупателей доступны 2 способа доставки: курьерская доставка по
          Новосибирску
          и самовывоз.</p>
        <p class="delivery__subtitle">Курьерская доставка:</p>
        <p class="delivery__text">Курьеры работают каждый день по тарифам курьерских служб. При оформлении заказа до
          15:00 возможна доставка в тот же день.</p>
        <p class="delivery__text1">
          При заказе от 4000 рублей доставка БЕСПЛАТНАЯ.
        </p>
        <p class="delivery__subtitle">Самовывоз:</p>
        <p class="delivery__text">Вы можете сделать заказ и забрать его самостоятельно по адресам: </p>
        <ul class="delivery__list">
          <li class="delivery__item">с нашего производства на ул. Урицкого, 36 с 10:00 до 18:00</li>
          <li class="delivery__item delivery__text1">из нашей кофейни на ул. Чаплыгина, 47 с 10:00 до 20:00</li>
        </ul>
        <p class="delivery__subtitle">Оплата:</p>
        <p class="delivery__text">При оформлении на сайте с самовывозом с производства или с курьерской доставкой
          необходимо оплатить заказ банковской картой.
          При получении заказа в нашей кофейне возможен как наличный расчет, так и оплата картой.</p>
        <p class="delivery__text">Оплата банковской картой удобна, если вы хотите отправить десерты в подарок или не
          желаете возиться с наличными при получении заказа.</p>
      </div>
    </div>
  </div>
</template>

<script>
import CartComponent from '@/components/CartComponent.vue';
import OrderForm from '@/components/forms/OrderForm.vue';

export default {
  components: {
    CartComponent,
    OrderForm
  },
  // computed: {
  //   cartItems() {
  //     return this.$store.state.cartItems;
  //   },
  // }
}
</script>

<style lang="scss" scoped>
@import "@/styles/pages-styles/cart";
</style>