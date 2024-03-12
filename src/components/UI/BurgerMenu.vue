<template>
    <div class="burger">
        <div @click="isHidden = !isHidden" class="burger__button">
            <img v-if="isHidden" class="burger__button_img" src="@/assets/img/burger-menu.svg" alt="button 'open burger menu'">
            <img v-if="!isHidden" class="burger__button_img" src="@/assets/img/burger-cross.svg" alt="button 'open burger menu'">
        </div>
        <ul v-if="!isHidden" @click="isHidden = !isHidden" class="burger-menu">
            <li @click="$router.push('/mochi')" class="burger-menu__item"><a href="#">Моти</a></li>
            <li @click="$router.push('/cafe')" class="burger-menu__item"><a href="#">Кофейня</a></li>
            <li @click="$router.push('/promo')" class="burger-menu__item"><a href="#">Акции</a></li>
            <li @click="$router.push('/about')" class="burger-menu__item"><a href="#">О нас</a></li>
            <li @click="$router.push('/contacts')" class="burger-menu__item"><a href="#">Контакты</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isHidden: true,
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/styles/burger";
</style>