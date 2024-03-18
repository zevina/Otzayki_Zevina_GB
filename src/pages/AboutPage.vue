<template>
    <div class="center">
        <section class="top center">
            <div class="top__img">
                <picture>
                    <source media="(min-width: 1200px)" srcset='@/assets/img/about/about_bg_big.png'>
                    <source media="(min-width: 960px)" srcset='@/assets/img/about/about_bg_middle.png'>
                    <img class="top__bg" alt="photo of desserts" src='@/assets/img/about/about_bg_small.png'>
                </picture>
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/styles/pages-styles/about";
</style>