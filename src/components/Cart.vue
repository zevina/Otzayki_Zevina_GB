<template>
    <div>
        <h2>Корзина</h2>

        <div v-for="(product, index) in cart" :key="index">
            <h3>{{ product.name }}</h3>
            <p>Цена: {{ product.price }} руб.</p>
            <p>Количество: <input type="number" v-model="product.quantity" min="1" @change="updateQuantity({ index, quantity: product.quantity })"></p>
            <p>Сумма: {{ product.price * product.quantity }} руб.</p>
        </div>

        <p>Общая сумма заказа: {{ total }} руб.</p>

        <h3>Оформление заказа:</h3>

        <form @submit.prevent="submitOrder">
            <label for="name">Имя:</label>
            <input type="text" id="name" v-model="order.name" required>

            <label for="email">Электронная почта:</label>
            <input type="email" id="email" v-model="order.email" required>

            <label for="address">Адрес доставки:</label>
            <input type="text" id="address" v-model="order.address" required>

            <label for="notes">Примечания к заказу:</label>
            <textarea id="notes" v-model="order.notes"></textarea>

            <button type="submit">Оформить заказ</button>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'Cart',
    computed: {
        ...mapGetters(['cart', 'total'])
    },
    data() {
        return {
            order: {
                name: '',
                email: '',
                address: '',
                notes: ''
            }
        };
    },
    methods: {
        ...mapMutations(['updateQuantity']),
        submitOrder() {
            // обработка отправки заказа
            console.log('Заказ отправлен!');
        }
    }
}
</script>