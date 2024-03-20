<template>
    <form @submit.prevent class="subscribe-form">
        <p class="subscribe-form__title">Не пропускайте важное!</p>
        <div>
            <div class="subscribe-form__form">
                <my-input v-model="subscription.email" type="email" placeholder="E-mail адрес"
                    class="subscribe-form__input" />

                <submit-button :disabled="!isDisable" @click="sendEmail" class="subscribe-form__btn">
                    Отправить
                </submit-button>
            </div>
            <p class="subscribe-form__text">получать информацию об акциях и событиях</p>
        </div>
    </form>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";
import SubmitButton from "@/components/UI/buttons/SubmitButton.vue";

export default {
    name: 'subscribe-form',
    components: { SubmitButton, MyInput },
    data() {
        return {
            subscription: {
                email: '',
            },
        }
    },
    computed: {
        isDisable() {
            return this.subscription.email.length > 0;
        }
    },
    methods: {
        sendEmail() {
            this.subscription.id = Date.now();
            this.$emit('send', this.subscription)
            this.subscription = {
                email: ''
            }
            // имитация отправки данных:
            console.log('Адрес добавлен в список рассылки новостей и сохранен в БД');
        },
    },
}
</script>

<style lang="scss" scoped>
@import "@/styles/subscribe";
</style>