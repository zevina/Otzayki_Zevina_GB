<template>
    <div class="wrapper">
        <my-header></my-header>
        <router-view></router-view>
        <my-footer></my-footer>
    </div>
</template>

<script>

import MyHeader from "@/components/layout/MyHeader.vue";
import MyFooter from "@/components/layout/MyFooter.vue";

export default {
    components: {MyFooter, MyHeader}
}
</script>

<style lang="scss">
@import "@/styles/styles.css";

</style>