<template>
    <div class="card">
        <div class="card-item center">
            <div class="card-item__image">
                <img class="card-item__main-img" :src="item.image1" alt="Photo of mochi dessert">
                <div class="card-item__title">{{ item.name }}</div>
            </div>
            <div class="card-item__info">
                <div class="card-item__img">
                    <img class="card-item__info-img" :src="item.image2" alt="Photo of mochi dessert">
                </div>
                <div class="card-item__desc">
                    <p class="card-item__text1">{{ item.description1 }}</p>
                    <p class="card-item__text2">{{ item.description2 }}</p>
                    <p class="card-item__price">{{ item.price }} руб</p>
                    <quantity-counter class="card-item__counter" :value="getCartItemQuantity(item)"
                        @input="updateCartItemQuantity(item, $event)" />
                    <SubmitButton class="card-item__btn" @click="addToCart">Добавить в корзину</SubmitButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import QuantityCounter from '@/components/UI/QuantityCounter.vue';
import SubmitButton from '../UI/buttons/SubmitButton.vue';

export default {
    components: {
        QuantityCounter,
        SubmitButton
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        getCartItemQuantity() {
            return this.$store.getters.getCartItemQuantity;
        }
    },
    methods: {
        addToCart() {
            this.$store.commit('addToCart', {
                item: this.item,
                quantity: 1
            });
        },
        updateCartItemQuantity(item, quantity) {
            this.$store.commit('updateCartItemQuantity', {
                item: item,
                quantity: quantity
            });
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/styles/carditem";
</style>
