<template>
    <div class="quantity__counter">
        <my-button class="quantity__btn" @click="decreaseQuantity">-</my-button>
        <my-input class="quantity__input" type="number" v-model.number="quantity" :min="min" />
        <my-button class="quantity__btn" @click="increaseQuantity">+</my-button>
    </div>
</template>

<script>
import MyButton from '@/components/UI/buttons/MyButton.vue';
import MyInput from '@/components/UI/MyInput.vue';

export default {
    components: { MyButton, MyInput },
    props: {
        value: {
            type: Number,
            default: 1
        },
        min: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            quantity: this.value
        }
    },
    watch: {
        quantity(newQuantity) {
            this.$emit('input', newQuantity);
        }
    },
    methods: {
        increaseQuantity() {
            this.quantity++;
            this.$emit('input', this.quantity);
        },
        decreaseQuantity() {
            if (this.quantity > this.min) {
                this.quantity--;
                this.$emit('input', this.quantity);
            }
        },
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/quantity";
</style>