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
                email: '',
                address: ''
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>