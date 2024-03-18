import {createStore} from 'vuex'

export default createStore({
    state: () => ({
        // topSection: {
        //     title: 'Меню вкусов',
        //     text: '',
        //     imgBig: '@/assets/img/mochi/mochi_bg_big.png',
        //     imgMiddle: '@/assets/img/mochi/mochi_bg_middle.png',
        //     imgSmall: '@/assets/img/mochi/mochi_bg_small.png',
        // },
        // cart: [
        //     {name: 'Товар 1', price: 100, quantity: 2},
        //     {name: 'Товар 2', price: 200, quantity: 3},
        //     // другие товары в корзине
        // ],
        // menuItems: [
        //     {id: 1, name: 'Товар 1', price: 100},
        //     {id: 2, name: 'Товар 2', price: 200},
        //     // другие товары меню
        // ]
    }),
    getters: {
        // topSection: state => state.topSection
    //     cart: state => state.cart,
    //     menuItems: state => state.menuItems,
    //     total: state => {
    //         let totalPrice = 0;
    //         for (let i = 0; i < state.cart.length; i++) {
    //             totalPrice += state.cart[i].price * state.cart[i].quantity;
    //         }
    //         return totalPrice;
    //     }
    }
    // ,
    // mutations: {
    //     updateQuantity(state, payload) {
    //         if (payload.quantity < 1) {
    //             payload.quantity = 1;
    //         }
    //         state.cart[payload.index].quantity = payload.quantity;
    //     }
    //     ,
    //     addToCart(state, product) {
    //         state.cart.push(product);
    //     }
    // }
})
;
