<template>
    <input :value="modelValue" @input="updateInput" class="input" :type="type">
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number],
        type: [String],
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    display: none;
}
</style>