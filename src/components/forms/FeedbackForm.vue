<template>
    <div>
        <h2>Форма обратной связи</h2>
        <my-input label="Имя" name="name" v-model="name" />
        <my-input label="Email" name="email" v-model="email"  value=""/>
        <my-input label="Сообщение" name="message" v-model="message" />

        <SubmitButton text="Отправить" @submit="submitForm" />
    </div>
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
            name: '',
            email: '',
            message: ''
        };
    },
    methods: {
        submitForm() {
            // Логика отправки формы обратной связи
            console.log('Форма обратной связи отправлена');
        }
    }
}
</script>

<style lang="scss" scoped>

</style>