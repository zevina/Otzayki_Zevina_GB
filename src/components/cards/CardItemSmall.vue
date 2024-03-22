<template>
    <div class="card-item-small">
        <img :src="item.image" alt="Item Image">
        <h2>{{ item.name }}</h2>
        <quantity-counter v-model="quantity" :min="1" @input="updateQuantity"></quantity-counter>
        <button @click="removeFromCart(item)">Удалить</button>
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
            quantity: this.item.quantity
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

<style scoped>
.card-item-small {
    /* стили для карточки товара маленького размера */
}
</style>