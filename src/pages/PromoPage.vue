<template>
    <div class="top__img">
    </div>
    <div class="promo-content">
        <div class="promo center">
            <div class="promo__left">
                <div class="promo__title">Акция апреля</div>
                <div class="promo__subtitle">делись впечатлениями и наслаждайся моти бесплатно!</div>
                <ol class="promo__text">
                    <li class="promo__item">Сделайте Stories в Instagram о посещении нашей кофейни, упомянув @otzayki
                    </li>
                    <li class="promo__item">Получите от нас в ответ сообщение о подтверждении участия в акции
                    </li>
                    <li class="promo__item">Покажите это сообщение при следующем заказе и получите вкусную моти в
                        подарок!
                    </li>
                </ol>
            </div>
            <div class="promo__right">
                <picture>
                    <source media="(min-width: 1200px)" srcset='@/assets/img/promo/promo_item_big.png'>
                    <source media="(min-width: 960px)" srcset='@/assets/img/promo/promo_item_middle.png'>
                    <img class="promo__right__img" alt="photo of desserts"
                        src='@/assets/img/promo/promo_item_small.png'>
                </picture>
            </div>
        </div>
        <div class="promo-content__decor">
            <img class="promo-content__decor__img" alt="rosemary" src='@/assets/img/promo/promo_rosemary.svg'>
        </div>
    </div>


</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/styles/pages-styles/promo";
</style>