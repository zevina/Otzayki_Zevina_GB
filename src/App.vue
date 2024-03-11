<template>
    <nav>
        <router-link to="/">Главная</router-link>

        <router-link to="/mochi">Моти</router-link>
        <router-link to="/cafe">Кофейня</router-link>
        <router-link to="/contacts">Контакты</router-link>
        <router-link to="/about">О нас</router-link>
        <router-link to="/promo">Акции</router-link>

        <router-link to="/cart">Корзина</router-link>
    </nav>
    <router-view/>
</template>

<script>
export default {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  height: 50px;
  background: lightcyan;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  //padding: 0 15px;

  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>