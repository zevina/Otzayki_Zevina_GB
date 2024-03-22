<template>
    <form @submit.prevent class="order-form">
        <p class="order-form__title">Оформление заказа</p>
        <p class="order-form__desc">Укажите все необходимые данные для максимально быстрой обработки заказа</p>
        <div class="order-form__inputs">
            <my-input class="order-form__input order-form__input_up" label="Имя" name="name" v-model="name"
                placeholder="Имя" />
            <my-input class="order-form__input" label="Адрес доставки" name="address" v-model="address"
                placeholder="Адрес доставки" />
            <my-input class="order-form__input" label="Телефон" name="phone" v-model="phone" placeholder="Телефон" />
            <my-input class="order-form__input order-form__input_down" label="Сообщение" name="message"
                v-model="message" placeholder="Пожелания к заказу" />
        </div>
        <SubmitButton class="order-form__btn" text="Отправить" @submit="submitForm">Отправить</SubmitButton>
    </form>
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
            address: '',
            phone: '',
            message: ''
        };
    },
    methods: {
        submitForm() {
            // Примерная логика отправки данных из формы оформления заказа 
            const url = 'https://example.com/feedback_endpoint';

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.data)
            })
                .then(response => {
                    if (response.ok) {
                        console.log("Данные из формы оформления заказа успешно отправлены на сервер");
                    } else {
                        console.error("Произошла ошибка при отправке данных из формы оформления заказа на сервер");
                    }
                })
                .catch(error => {
                    console.error("Ошибка при отправке данных из формы оформления заказа на сервер:", error);
                });

            // очистка полей формы
            this.data = {
                name: '',
                address: '',
                phone: '',
                message: ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/orderform";
</style>