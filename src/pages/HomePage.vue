<template>
    <div class="pink-bg">
        <div class="center">
            <section class="top center">
                <div class="top__img">
                    <picture>
                        <source media="(min-width: 1200px)" srcset='@/assets/img/home/top_img_big.png'>
                        <source media="(min-width: 768px)" srcset='@/assets/img/home/top_img_middle.png'>
                        <img class="top__bg" alt="photo of desserts" src='@/assets/img/home/top_img_small.png'>
                    </picture>
                </div>
            </section>
            <div class="top-info">
                <div class="top-info__content">
                    <div class="top-info1">
                        <picture>
                            <source media="(min-width: 1200px)" srcset='@/assets/img/home/main_1_big.png'>
                            <source media="(min-width: 960px)" srcset='@/assets/img/home/main_1_middle.png'>
                            <img class="top-info__img1" alt="photo of desserts"
                                 src='@/assets/img/home/main_1_small.png'>
                        </picture>
                        <p class="top-info__title">
                            Самое высокое качество свежих и натуральных ингредиентов!
                        </p>
                        <p class="top-info__text1">
                            Мы посвятили много времени и усилий, чтобы создать уникальный вкус и текстуру, чтобы каждый
                            укус нашего моти оставался незабываемым!
                        </p>
                    </div>
                    <div class="top-info2">
                        <p class="top-info__text2">
                            Моти - это японский десерт из натуральных и вкусных ингредиентов, который покорил сердца
                            любителей сладостей по всему миру
                        </p>
                        <picture>
                            <source media="(min-width: 1200px)" srcset='@/assets/img/home/main_2_big.png'>
                            <source media="(min-width: 960px)" srcset='@/assets/img/home/main_2_middle.png'>
                            <img class="top-info__img2" alt="photo of desserts"
                                 src='@/assets/img/home/main_2_small.png'>
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    </div>
     <div class="menu">
         <div class="menu__content center">
             <div class="menu__bg">
                 <picture>
                     <source media="(min-width: 1200px)" srcset='@/assets/img/home/evcalipt_big.png'>
                     <source media="(min-width: 960px)" srcset='@/assets/img/home/evcalipt_middle.png'>
                     <img class="menu__bg_img" alt="photo of desserts"
                          src='@/assets/img/home/evcalipt_small.png'>
                 </picture>
             </div>
             <div class="menu__content_left">
                 <p class="menu__title">Меню вкусов</p>
                 <p class="menu__text">выбирайте свои любимые вкусы или открывайте новые с нашей разнообразной
                     коллекцией
                 </p>
                 <p class="menu__price">280 ₽</p>
             </div>
             <div class="menu__content_right">
                 <ul class="menu__list">
                     <li class="menu__item">клубника</li>
                     <li class="menu__item">манго-маракуйя</li>
                     <li class="menu__item">черная смородина</li>
                     <li class="menu__item">сникерс</li>
                     <li class="menu__item">малина-роза</li>
                     <li class="menu__item">шоколад-нутелла</li>
                     <li class="menu__item">груша-горгонзола</li>
                     <li class="menu__item">орео</li>
                     <li class="menu__item">рафаэлло</li>
                     <li class="menu__item">капучино-бейлис</li>
                 </ul>
                 <button @click="$router.push('/mochi')" class="menu__btn">
                     посмотреть все вкусы
                 </button>
             </div>
         </div>
     </div>
     <div class="cafe">
         <div class="center">
             <div class="cafe__content">
                 <div class="cafe__content_left">
                     <video class="cafe__video" autoplay muted loop poster="@/assets/img/home/video_poster_big.png">
                         <source src="@/assets/img/home/video.mp4" type="video/mp4">
                         <source src="@/assets/img/home/video.webm" type="video/webm">
                         <!--                <source src="@/assets/img/home/video.avi" type="video/avi">-->
                         Ваш браузер не поддерживает встроенные видео
                     </video>
                 </div>
                 <div class="cafe__content_right">
                     <p class="cafe__content_title">Уютная кофейня <br> в центре Новосибирска</p>
                     <p class="cafe__content_text">Наша кофейня не только для любителей моти и десертов. У нас вы найдете
                         широкий выбор высококачественного кофе, приготовленного профессионалами своего дела. А если вы
                         предпочитаете чай, мы предлагаем богатый выбор ароматных сортов.</p>
                     <p class="cafe__content_text">Кофейня “От зайки” - это настоящее убежище от городской суеты для
                         любителей сладостей и ценителей хорошего вкуса.</p>
                     <p class="cafe__content_address">Новосибирск, ул.&nbspЧаплыгина,&nbsp47 10:00–20:00</p>
                 </div>
             </div>
             <p class="cafe__text hidden">Наша кофейня не только для любителей моти и десертов. У нас вы найдете
                 широкий выбор высококачественного кофе, приготовленного профессионалами своего дела. <br> А если вы
                 предпочитаете чай, мы предлагаем богатый выбор ароматных сортов.</p>
             <p class="cafe__text hidden">Кофейня “От зайки” - это настоящее убежище от городской суеты для
                 любителей сладостей и ценителей хорошего вкуса.</p>
         </div>
     </div>
     <div class="features center">
         <div class="feature-card">
             <img class="feature-card__img" alt="photo of desserts" src='@/assets/img/home/feature_1.svg'>
             <p class="feature-card__title">Качество и свежесть</p>
             <p class="feature-card__text">Моти приготовлены из натуральных и свежих продуктов без добавления
                 консервантов и усилителей вкуса.</p>
             <p class="feature-card__text">Мы уделяем большое внимание качесту наших десертов</p>
         </div>
         <div class="feature-card">
             <img class="feature-card__img" alt="photo of desserts" src='@/assets/img/home/feature_2.svg'>
             <p class="feature-card__title">Разнообразие вкусов</p>
             <p class="feature-card__text">Широкий ассортимент начинок позволит найти любимый вкус моти каждому.</p>
             <p class="feature-card__text">А помимо основной линейки вкусов у нас есть ограниченные сезонные
                 предложения</p>
         </div>
         <div class="feature-card">
             <img class="feature-card__img" alt="photo of desserts" src='@/assets/img/home/feature_3.svg'>
             <p class="feature-card__title">Радость и наслаждение</p>
             <p class="feature-card__text">Наши моти созданы для того, чтобы подарить вам наслажение независимо от того,
                 празднуете ли вы особый момент или просто хотите порадовать себя и близких без повода</p>
         </div>
     </div>
     <div class="promo">
         <div class="center">
             <div class="promo-card">
                 <div class="promo-card__info">
                     <p class="promo-card__title">Акция апреля</p>
                     <p class="promo-card__heading">делись впечатлениями и наслаждайся моти бесплатно!</p>
                     <p class="promo-card__text">получите маленькую моти в подарок за вашу любезную отзывчивость</p>
                     <a @click="$router.push('/promo')" href="#" class="promo-card__btn">
                         <p class="promo-card__btn_text">Подробнее</p>
                         <svg width="48" height="28" viewBox="0 0 48 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <g clip-path="url(#clip0_15126_2830)">
                                 <path id="arrow" d="M34.0517 0.981934L31.3237 3.77L39.6221 12.0625H0.75V15.9375H39.6221L31.3257 24.2319L34.0517 27.0181L47.0659 14L34.0517 0.981934Z" fill="#7E3636"/>
                             </g>
                             <defs>
                                 <clipPath id="clip0_15126_2830">
                                     <rect width="48" height="28" fill="white"/>
                                 </clipPath>
                             </defs>
                         </svg>

                     </a>
                 </div>
                 <div class="promo-card__img">
                     <picture>
                         <source media="(min-width: 1644px)" srcset='@/assets/img/home/promo_circle_big.png'>
                         <source media="(min-width: 768px)" srcset='@/assets/img/home/promo_circle_middle.png'>
                         <img class="promo__img" alt="photo of mochi" src='@/assets/img/home/promo_circle_small.png'>
                     </picture>
                 </div>
             </div>
         </div>
     </div>
     <div class="feedback center">
         <div class="feedback__up">
             <p class="feedback__text">“ десерт просто волшебный!<br>Я уже попробовала несколько видов моти, и каждый из
                 них вызывает восторг и желание вернуться к этому десерту снова и снова.</p>
             <img src="@/assets/img/home/main_quotes.svg" alt="" class="feedback__quote">
         </div>
         <div class="feedback__down">
             <div class="feedback__author">
                 <img src="@/assets/img/home/main_feedback.png" alt="photo of feedback's author" class="feedback__photo">
                 <div class="feedback__author_info">
                     <p class="feedback__author_name">Лена Зевина</p>
                     <p class="feedback__author_about">блогер</p>
                 </div>
             </div>
             <button @click="$router.push('/contacts')" class="feedback__btn">написать свой отзыв</button>
         </div>
     </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/styles/pages-styles/home";
</style>