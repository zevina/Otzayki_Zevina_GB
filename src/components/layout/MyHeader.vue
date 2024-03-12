<template>
    <div class="header">
        <header id="home" class="header center">
            <div class="header__left">
                <a class="menu__link" @click="$router.push('/')" href="#">
                    <img class="menu__logo-img" src="@/assets/img/logo.svg" alt="logo">
                </a>
            </div>
            <div class="header__middle">
                <nav class="nav-menu">
                    <ul class="menu-middle">
                        <li @click="$router.push('/mochi')" class="menu-middle__item"><a class="menu__link" href="#">
                            Моти </a></li>
                        <li @click="$router.push('/cafe')" class="menu-middle__item"><a class="menu__link" href="#">
                            Кофейня </a></li>
                        <li @click="$router.push('/promo')" class="menu-middle__item"><a class="menu__link" href="#">
                            Акции </a></li>
                        <li @click="$router.push('/about')" class="menu-middle__item"><a class="menu__link" href="#"> О
                            нас </a></li>
                        <li @click="$router.push('/contacts')" class="menu-middle__item"><a class="menu__link" href="#">
                            Контакты </a></li>
                    </ul>
                </nav>

            </div>
            <div class="header__right">
                    <ul class="menu-right">
                        <li class="menu-right__item hidden">
                            <label class="burger" for="burger_id">
                                <svg width="32" height="23" viewBox="0 0 32 23" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z"
                                          fill="#E8E8E8"/>
                                </svg>
                            </label>
                            <input class="burger__check" type="checkbox" name="burger" id="burger_id">
                            <ul class="burger-menu">
                                <li><a class="close" href="#">
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path class="close-icon"
                                              d="M7.4158 6.00409L11.7158 1.71409C11.9041 1.52579 12.0099 1.27039 12.0099 1.00409C12.0099 0.73779 11.9041 0.482395 11.7158 0.294092C11.5275 0.105788 11.2721 0 11.0058 0C10.7395 0 10.4841 0.105788 10.2958 0.294092L6.0058 4.59409L1.7158 0.294092C1.52749 0.105788 1.2721 -1.9841e-09 1.0058 0C0.739497 1.9841e-09 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.0017066 0.73779 0.0017066 1.00409C0.0017066 1.27039 0.107495 1.52579 0.295798 1.71409L4.5958 6.00409L0.295798 10.2941C0.20207 10.3871 0.127676 10.4977 0.0769072 10.6195C0.0261385 10.7414 0 10.8721 0 11.0041C0 11.1361 0.0261385 11.2668 0.0769072 11.3887C0.127676 11.5105 0.20207 11.6211 0.295798 11.7141C0.388761 11.8078 0.499362 11.8822 0.621222 11.933C0.743081 11.9838 0.873786 12.0099 1.0058 12.0099C1.13781 12.0099 1.26852 11.9838 1.39038 11.933C1.51223 11.8822 1.62284 11.8078 1.7158 11.7141L6.0058 7.41409L10.2958 11.7141C10.3888 11.8078 10.4994 11.8822 10.6212 11.933C10.7431 11.9838 10.8738 12.0099 11.0058 12.0099C11.1378 12.0099 11.2685 11.9838 11.3904 11.933C11.5122 11.8822 11.6228 11.8078 11.7158 11.7141C11.8095 11.6211 11.8839 11.5105 11.9347 11.3887C11.9855 11.2668 12.0116 11.1361 12.0116 11.0041C12.0116 10.8721 11.9855 10.7414 11.9347 10.6195C11.8839 10.4977 11.8095 10.3871 11.7158 10.2941L7.4158 6.00409Z"
                                              fill="#6F6E6E"/>
                                    </svg>
                                </a></li>

                                <li>
                                    <h3 class="burger-menu__title">MENU</h3>
                                </li>
                                <li>
                                    <ul class="burger-menu__section">
                                        <li class="burger-menu__item"><a href="#">Accessories</a></li>
                                        <li class="burger-menu__item"><a href="#">Bags</a></li>
                                        <li class="burger-menu__item"><a href="#">Denim</a></li>
                                        <li class="burger-menu__item"><a href="#">T-Shirts</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <h4 class="burger-menu__heading">WOMAN</h4>
                                </li>
                                <li>
                                    <ul class="burger-menu__section">
                                        <li class="burger-menu__item"><a href="#">Accessories</a></li>
                                        <li class="burger-menu__item"><a href="#">Jackets & Coats</a></li>
                                        <li class="burger-menu__item"><a href="#">Polos</a></li>
                                        <li class="burger-menu__item"><a href="#">T-Shirts</a></li>
                                        <li class="burger-menu__item"><a href="#">Shirts</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <h4 class="burger-menu__heading">KIDS</h4>
                                </li>
                                <li>
                                    <ul class="burger-menu__section">
                                        <li class="burger-menu__item"><a href="#">Accessories</a></li>
                                        <li class="burger-menu__item"><a href="#">Jackets & Coats</a></li>
                                        <li class="burger-menu__item"><a href="#">Polos</a></li>
                                        <li class="burger-menu__item"><a href="#">T-Shirts</a></li>
                                        <li class="burger-menu__item"><a href="#">Shirts</a></li>
                                        <li class="burger-menu__item"><a href="#">Bags</a></li>
                                    </ul>
                                </li>

                            </ul>
                        </li>
                        <li @click="$router.push('/cart')" class="menu-right__item"><a href="#" class="menu__link">
                            <img class="menu__cart-img" src="@/assets/img/cart-heart.svg" alt="cart">
                        </a></li>
                    </ul>
            </div>
        </header>


        <!--        <nav class="navbar__btns">-->
        <!--            <button @click="$router.push('/')" style="margin-left: 20px;"> Главная</button>-->
        <!--            <button @click="$router.push('/mochi')" style="margin-left: 20px;"> Моти</button>-->
        <!--            <button @click="$router.push('/cafe')" style="margin-left: 20px;"> Кофейня</button>-->
        <!--            <button @click="$router.push('/promo')" style="margin-left: 20px;"> Акции</button>-->
        <!--            <button @click="$router.push('/about')" style="margin-left: 20px;"> О нас</button>-->
        <!--            <button @click="$router.push('/contacts')" style="margin-left: 20px;"> Контакты</button>-->
        <!--            <button @click="$router.push('/cart')" style="margin-left: 20px;"> Корзина</button>-->
        <!--        </nav>-->
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/styles/vars";

.header {
  min-height: 75px;
  background: $pink-500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &__left {
    margin-left: 15px;
  }

  &__right {
    margin-right: 15px;
  }
}

.menu-middle {
  display: flex;
  align-items: flex-end;
  list-style: none;
  justify-content: space-between;
  gap: 33px;

  &__item {
    transition: all 0.3s;

    &:hover path {
      fill: $pink-500;
      transition: all 0.3s;
    }

    &:hover .menu__logo-img {
      filter: opacity(0.9) saturate(2);
      transition: all 0.3s;
    }
  }

  &__link {
    padding: 18px 0;
  }

  &__logo-img {
    margin-right: 8px;
  }
}

.menu-right {
  list-style-type: none;
  display: flex;
  align-items: flex-end;
  gap: 25px;

  &__item {
    transition: all 0.3s;

    &:hover .item-icon {
      fill: $pink-500;
      cursor: pointer;
      transition: all 0.3s;
    }

    &:hover .path__circle {
      fill: $color-white;
    }

    &:hover .path__number {
      fill: $pink-500;
    }
  }
}

.burger {
  &__check {
    display: none;
    position: relative;

    &:checked + .burger-menu {
      display: flex;
      right: 0;
    }

    &:checked + .close {
      display: flex;

    }
  }
}

.burger-menu {
  display: none;
  position: absolute;
  flex-direction: column;
  top: 75px;
  right: -235px;
  padding: 32px 34px 12px 32px;
  box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
  background: $color-white;
  z-index: 111;
  list-style: none;
  transition: all 0.5s;


  &__title {
    color: $color-dark-text;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  &__heading {
    color: $pink-500;
    font-size: 14px;
    font-weight: 400;
    padding-bottom: 12px;
  }

  &__section {
    list-style: none;

    &:last-child {
      margin-bottom: 20px;
    }
  }

  &__item {
    margin-bottom: 11px;
  }

  &__item a {
    color: $color-white;
    font-size: 14px;
    font-weight: 400;
    padding-left: 22px;
    padding-right: 48px;
    transition: all 0.3s;

    &:hover {
      color: $color-dark-text;
    }
  }

}

.close {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 555;

  &:hover .close-icon {
    fill: $color-dark-text;
  }

  //&:hover .burger-menu{
  //  display: none;
  //}
}


.second-header {
  background: $color-white;
  min-height: 148px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__title {
    color: $pink-500;
    font-size: 24px;
    font-weight: 400;
    margin-left: 8px;
  }
}

.breadcrumbs {
  margin-right: 8px;

  &__ul {
    list-style-type: none;
    display: flex;
  }

  &__link {
    font-size: 14px;
    font-weight: 300;
    color: $color-dark-text;

    &:hover {
      color: $color-dark-text;
    }
  }

  &__li:not(:last-child)::after {
    content: '/';
    padding-left: 8px;
    padding-right: 8px;
    font-size: 14px;
    font-weight: 300;
    color: $color-dark-text;
  }

  &__li:last-child > .breadcrumbs__link {
    font-weight: 700;
    color: $pink-500;
  }
}

//.header {
//    height: 200px;
//    background: $pink-500;
//    display: flex;
//}
//
//.navbar__btns {
//
//    align-items: center;
//    padding: 0 15px;
//}


</style>