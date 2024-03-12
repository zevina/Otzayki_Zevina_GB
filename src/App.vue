<template>
    <div class="wrapper">
        <my-header></my-header>
        <div class="app">
            <router-view></router-view>
        </div>
    </div>

</template>

<script>

import MyHeader from "@/components/layout/MyHeader.vue";

export default {
    components: {MyHeader}
}
</script>

<style lang="scss">
@import "@/styles/styles.css";

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;
}


</style>