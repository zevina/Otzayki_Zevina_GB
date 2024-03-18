<template>
    <div class="bg-img">
        <div class="center">
            <section class="top center">
                <div class="top__img">
                    <picture style="height: 100%;">
                        <source media="(min-width: 1200px)" srcset='@/assets/img/error/error_bg_big.png'>
                        <source media="(min-width: 960px)" srcset='@/assets/img/error/error_bg_middle.png'>
                        <img class="top__bg" alt="photo of desserts" src='@/assets/img/error/error_bg_small.png'>
                    </picture>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/styles/pages-styles/error";
</style>