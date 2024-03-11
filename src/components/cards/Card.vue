<template>
    <div>
        <h3>{{ product.name }}</h3>
        <p>Цена: {{ product.price }} руб.</p>
        <button @click="addToCart">Добавить в корзину</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'Card',
    props: ['product'],
    methods: {
        ...mapMutations(['addToCart']),
        addToCart() {
            this.$store.commit('addToCart', this.product);
        }
    }
}
</script>