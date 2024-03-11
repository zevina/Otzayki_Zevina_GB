import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
import MochiPage from "@/pages/MochiPage.vue";
import CafePage from "@/pages/CafePage.vue";
import ContactsPage from "@/pages/ContactsPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import PromoPage from "@/pages/PromoPage.vue";
import CartPage from "@/pages/CartPage.vue";
import ErrorPage from "@/pages/ErrorPage.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/mochi',
    name: 'mochi',
    component: MochiPage
  },
  {
    path: '/cafe',
    name: 'cafe',
    component: CafePage
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/promo',
    name: 'promo',
    component: PromoPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  },
  {
    path: '/:CatchAll(.*)',
    name: 'error404',
    component: ErrorPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;