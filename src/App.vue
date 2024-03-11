<template>
    <nav class="navbar__btns">
        <button @click="$router.push('/')" style="margin-left: 20px;"> Главная</button>
        <button @click="$router.push('/mochi')" style="margin-left: 20px;"> Моти</button>
        <button @click="$router.push('/cafe')" style="margin-left: 20px;"> Кофейня</button>
        <button @click="$router.push('/promo')" style="margin-left: 20px;"> Акции</button>
        <button @click="$router.push('/about')" style="margin-left: 20px;"> О нас</button>
        <button @click="$router.push('/contacts')" style="margin-left: 20px;"> Контакты</button>
        <button @click="$router.push('/cart')" style="margin-left: 20px;"> Корзина</button>
    </nav>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;
}

.navbar__btns {
    height: 50px;
    background: lightcyan;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;

}
</style>