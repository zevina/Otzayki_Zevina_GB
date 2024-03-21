<template>
    <div class="quantity__counter">
        <my-button class="quantity__btn" @click="decreaseQuantity">-</my-button>
        <my-input class="quantity__input" type="number" v-model.number="quantity" min="0" />
        <my-button class="quantity__btn" @click="increaseQuantity">+</my-button>
    </div>
</template>

<script>
import MyButton from '@/components/UI/buttons/MyButton.vue';
import MyInput from '@/components/UI/MyInput.vue';

export default {
    name: ' quantity-counter ',
    components: { MyButton, MyInput },
    data() {
        return {
            quantity: 1
        }
    },
    methods: {
        increaseQuantity() {
            this.quantity++;
        },
        decreaseQuantity() {
            if (this.quantity > 0) {
                this.quantity--;
            }
        },
    }
}

</script>

<style lang="scss" scoped>
@import "@/styles/quantity";
</style>