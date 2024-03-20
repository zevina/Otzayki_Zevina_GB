<template>
    <form @submit.prevent>
        <div class="center">
            <div class="feedback-form_wrapper">
                <p class="feedback-form__title">Обратная связь</p>
                <p class="feedback-form__desc">Вы можете написать здесь свой отзыв. <br>
                    Если вы хотите стать нашим партнером, то оставьте свои данные в этой форме и мы свяжемся в ближайшее
                    время.
                </p>
                <div class="feedback-form__form">
                    <div class="feedback-form__name">
                        <my-input class="feedback-form__input feedback-form__input_left" placeholder="Имя" label="Имя"
                            name="name" v-model="data.name" required="true" />
                        <my-input class="feedback-form__input feedback-form__input_right" placeholder="Фамилия"
                            label="Фамилия" name="surname" v-model="data.surname" />
                    </div>
                    <my-input class="feedback-form__input" placeholder="E-mail" label="Email" name="email"
                        v-model="data.email" value="" required="true" />
                    <my-input class="feedback-form__input" placeholder="Телефон" label="Телефон" name="phone"
                        v-model="data.phone" value="" />
                    <my-input class="feedback-form__input feedback-form__input_down"
                        placeholder="напишите здесь свой текст..." label="Сообщение" name="message"
                        v-model="data.message" required="true" />
                </div>
                <submit-button :disabled="!isDisable" @click="submitForm" class="feedback-form__btn">
                    Отправить
                </submit-button>
            </div>
        </div>
    </form>
</template>

<script>
import MyInput from '@/components/UI/MyInput.vue';
import SubmitButton from '@/components/UI/buttons/SubmitButton.vue';

export default {
    name: 'feedback-form',
    components: {
        MyInput,
        SubmitButton
    },
    data() {
        return {
            data: {
                name: '',
                surname: '',
                email: '',
                phone: '',
                message: ''
            }
        };
    },
    methods: {
        isDisable() {
            return (this.data.name.length > 0 && this.data.email.length > 0 && this.data.message.length > 0);
        },
        submitForm() {
            // Примерная логика отправки данных из формы обратной связи 
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
                        console.log("Данные из формы обратной связи успешно отправлены на сервер");
                    } else {
                        console.error("Произошла ошибка при отправке данных из формы обратной связи на сервер");
                    }
                })
                .catch(error => {
                    console.error("Ошибка при отправке данных из формы обратной связи на сервер:", error);
                });

            // очистка полей формы
            this.data = {
                name: '',
                surname: '',
                email: '',
                phone: '',
                message: ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/feedback";
</style>