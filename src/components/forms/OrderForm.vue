<template>
    <div>
        <h2>Форма заказа</h2>
        <my-input label="Имя" name="name" v-model="name" />
        <my-input label="Email" name="email" v-model="email" />
        <my-input label="Адрес доставки" name="address" v-model="address" />

        <SubmitButton text="Оформить заказ" @submit="submitForm" />
    </div>
</template>

<script>
import MyInput from '@/components/UI/MyInput.vue';
import SubmitButton from '@/components/UI/buttons/SubmitButton.vue';

export default {
    name: 'order-form',
    components: {
        MyInput,
        SubmitButton
    },
    data() {
        return {
            name: '',
            email: '',
            address: ''
        };
    },
    methods: {
        submitForm() {
            // Логика отправки формы заказа
            console.log('Заказ оформлен');
        }
    }
}
</script>

<style lang="scss" scoped>

</style>