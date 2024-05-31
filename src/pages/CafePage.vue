<template>
    <div class="top__img">
    </div>
    <div class="wrapper-drinks center">
        <div class="drinks">
            <div class="drinks__title">Напитки</div>
            <div class="drinks__subtitle">каждый найдет что-то по душе</div>
            <div class="drinks__content">
                <div class="drinks__content_left">
                    <picture>
                        <source media="(min-width: 1200px)" srcset='@/assets/img/cafe/cafe_drinks_big.png'>
                        <source media="(min-width: 960px)" srcset='@/assets/img/cafe/cafe_drinks_middle.png'>
                        <img class="drinks__content__img" alt="photo of desserts"
                            src='@/assets/img/cafe/cafe_drinks_small.png'>
                    </picture>
                </div>
                <div class="drinks__content_right">
                    <div class="drinks__content_section">
                        <div class="drinks__content_item">
                            <span class='label'>Эспрессо</span> <span class='price'>100 ₽</span>
                        </div>
                        <div class="drinks__content_item">
                            <span class='label'>Капучино</span> <span class='price'>160\200 ₽</span>
                        </div>
                        <div class="drinks__content_item">
                            <span class='label'>Латте</span> <span class='price'>150\180 ₽</span>
                        </div>
                        <div class="drinks__content_item">
                            <span class='label'>Флэт Уайт</span> <span class='price'>190 ₽</span>
                        </div>
                        <div class="drinks__content_item">
                            <span class='label'>Раф цитрусовый</span> <span class='price'>230 ₽</span>
                        </div>
                        <div class="drinks__content_item">
                            <span class='label'>Американо</span> <span class='price'>150 ₽</span>
                        </div>
                    </div>
                    <div class="drinks__content_section">
                        <div class="drinks__content_item">
                            <span class='label'>Чай классический</span> <span class='price'>200 ₽</span>
                        </div>
                        <div class="drinks__content_item">
                            <span class='label'>Чай авторский</span> <span class='price'>250 ₽</span>
                        </div>
                    </div>
                    <div class="drinks__content_section">
                        <div class="drinks__content_item">
                            <span class='label'>Лимонад (Австралия)</span> <span class='price'>350 ₽</span>
                        </div>
                        <div class="drinks__content_item">
                            <span class='label'>Лимонад Лапочка</span> <span class='price'>150 ₽</span>
                        </div>
                    </div>
                    <div class="drinks__content_section">
                        <div class="drinks__content_item">
                            <span class='label'>Раф цикорий</span> <span class='price'>100 ₽</span>
                        </div>
                        <div class="drinks__content_item">
                            <span class='label'>Капучино цикорий</span> <span class='price'>100 ₽</span>
                        </div>
                        <div class="drinks__content_item">
                            <span class='label'>Чай классический</span> <span class='price'>100 ₽</span>
                        </div>
                        <div class="drinks__content_item">
                            <span class='label'>Чай авторский</span> <span class='price'>100 ₽</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="drinks__decor">
            <picture>
                <source media="(min-width: 1200px)" srcset='@/assets/img/cafe/cafe_rosemary_big.svg'>
                <source media="(min-width: 960px)" srcset='@/assets/img/cafe/cafe_rosemary_middle.svg'>
                <img class="drinks__decor__img" alt="photo of desserts" src='@/assets/img/cafe/cafe_rosemary_small.svg'>
            </picture>
        </div>
    </div>
    <div class="wrapper-desserts">
        <div class="desserts center">
            <div class="desserts__title">Еда</div>
            <div class="desserts__subtitle">сладости и круассаны</div>
            <div class="desserts__content">
                <div class="desserts__content_left">
                    <div class="desserts__content_item">
                        <span class='label'>Пирожное Прага</span> <span class='price'>290 ₽</span>
                    </div>
                    <div class="desserts__content_item">
                        <span class='label'>Пирожное Медовик</span> <span class='price'>260 ₽</span>
                    </div>
                    <div class="desserts__content_item">
                        <span class='label'>Конфета Трюфель</span> <span class='price'>90 ₽</span>
                    </div>
                    <div class="desserts__content_item">
                        <span class='label'>Меренговый рулет</span> <span class='price'>280 ₽</span>
                    </div>
                    <div class="desserts__content_item">
                        <span class='label'>Торт морковный</span> <span class='price'>280 ₽</span>
                    </div>
                    <br>
                    <br>
                    <div class="desserts__content_item">
                        <span class='label'>Круассан с форелью</span> <span class='price'>420 ₽</span>
                    </div>
                    <div class="desserts__content_item">
                        <span class='label'>Круассан с цыпленком</span> <span class='price'>380 ₽</span>
                    </div>
                </div>
                <div class="desserts__content_right">
                    <picture>
                        <source media="(min-width: 1200px)" srcset='@/assets/img/cafe/cafe_desserts_big.png'>
                        <source media="(min-width: 960px)" srcset='@/assets/img/cafe/cafe_desserts_middle.png'>
                        <img class="desserts__content__img" alt="photo of desserts"
                            src='@/assets/img/cafe/cafe_desserts_small.png'>
                    </picture>
                </div>
            </div>
        </div>
        <div class="desserts__decor">
            <picture>
                <source media="(min-width: 1200px)" srcset='@/assets/img/cafe/cafe_mint_big.svg'>
                <source media="(min-width: 960px)" srcset='@/assets/img/cafe/cafe_mint_middle.svg'>
                <img class="desserts__decor__img" alt="photo of desserts" src='@/assets/img/cafe/cafe_mint_small.svg'>
            </picture>
        </div>
    </div>



</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/styles/pages-styles/cafe";
</style>