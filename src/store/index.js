import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    items: [
      {
        id: 1,
        name: "Клубника",
        description1: "Пищевая ценность в 100 г: Энергетическая ценность - 275 ккал",
        description2: "Белки - 3,3 г. Жиры - 16,1 г. Углеводы - 40,3 г.",
        category: 'Ягодные',
        price: 280,
        image1: require("@/assets/img/mochi/items/клубника_1.jpg"),
        image2: require("@/assets/img/mochi/items/клубника.png")
      },
      {
        id: 2,
        name: "Капучино-бейлиз",
        description1: "Пищевая ценность в 100 г: Энергетическая ценность - 319 ккал",
        description2: "Белки - 4,9 г. Жиры - 18,1 г. Углеводы - 44,3 г.",
        category: 'Другие',
        price: 280,
        image1: require("@/assets/img/mochi/items/капучино_бейлиз_1.jpg"),
        image2: require("@/assets/img/mochi/items/капучино_бейлиз.png")
      },
      {
        id: 3,
        name: "Манго-маракуйя",
        description1: "Пищевая ценность в 100 г: Энергетическая ценность - 295 ккал",
        description2: "Белки - 3,9 г. Жиры - 16,8 г. Углеводы - 41,6 г.",
        category: 'Фруктовые',
        price: 280,
        image1: require("@/assets/img/mochi/items/манго_маракуйя_1.jpg"),
        image2: require("@/assets/img/mochi/items/манго_маракуйя.png")
      },
      {
        id: 4,
        name: "Мандарин",
        description1: "Пищевая ценность в 100 г: Энергетическая ценность - 286 ккал",
        description2: "Белки - 3,9 г. Жиры - 15,4 г. Углеводы - 38,4 г.",
        category: 'Сезонные',
        price: 280,
        image1: require("@/assets/img/mochi/items/мандарин_1.jpg"),
        image2: require("@/assets/img/mochi/items/мандарин.png")
      },
      {
        id: 5,
        name: "Орео",
        description1: "Пищевая ценность в 100 г: Энергетическая ценность - 302 ккал",
        description2: "Белки - 4,1 г. Жиры - 17,3 г. Углеводы - 43,6 г.",
        category: 'Шоколадные',
        price: 280,
        image1: require("@/assets/img/mochi/items/орео_1.jpg"),
        image2: require("@/assets/img/mochi/items/орео.png")
      },
      {
        id: 6,
        name: "Черная смородина",
        description1: "Пищевая ценность в 100 г: Энергетическая ценность - 289 ккал",
        description2: "Белки - 3,7 г. Жиры - 16,4 г. Углеводы - 42,0 г.",
        category: 'Ягодные',
        price: 280,
        image1: require("@/assets/img/mochi/items/смородина_1.jpg"),
        image2: require("@/assets/img/mochi/items/смородина.png")
      },
      {
        id: 7,
        name: "Вишня-коньяк",
        description1: "Пищевая ценность в 100 г: Энергетическая ценность - 329 ккал",
        description2: "Белки - 4,8 г. Жиры - 16,1 г. Углеводы - 42,3 г.",
        category: 'Алко 18+',
        price: 350,
        image1: require("@/assets/img/mochi/items/вишня_коньяк_1.jpg"),
        image2: require("@/assets/img/mochi/items/вишня_коньяк.png")
      },

    ],
    categories: [
      'Фруктовые',
      'Ягодные',
      'Шоколадные',
      'Другие',
      'Сезонные',
      'Алко 18+',
    ],
    cartItems: [],
    totalAmount: 0
  }),
  getters: {
    getCartItemQuantity: (state) => (item) => {
      const foundItem = state.cartItems.find(i => i.id === item.id);
      return foundItem ? foundItem.quantity : 0;
    },
    filteredItemsByCategory: (state) => (category) => {
      return state.items.filter(item => item.category === category);
    },
    categories: (state) => {
      return state.categories;
    }
  },
  mutations: {
    addToCart(state, payload) {
      const foundItem = state.cartItems.find(item => item.id === payload.item.id);
      if (foundItem) {
        foundItem.quantity += payload.quantity;
      } else {
        state.cartItems.push({
          ...payload.item,
          quantity: payload.quantity
        });
      }
      state.totalAmount += payload.item.price * payload.quantity;
    },
    updateCartItemQuantity(state, payload) {
      const foundItem = state.cartItems.find(item => item.id === payload.item.id);
      if (foundItem) {
        state.totalAmount -= foundItem.price * foundItem.quantity;
        foundItem.quantity = payload.quantity;
        state.totalAmount += foundItem.price * foundItem.quantity;
      }
    },
    removeFromCart(state, item) {
      const foundItemIndex = state.cartItems.findIndex(i => i.id === item.id);
      if (foundItemIndex !== -1) {
        state.totalAmount -= state.cartItems[foundItemIndex].price * state.cartItems[foundItemIndex].quantity;
        state.cartItems.splice(foundItemIndex, 1);
      }
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalAmount = 0;
    },
    updateTotalAmount(state, amount) {
      state.totalAmount = amount;
    },
    updateSelectedCategory(state, category) {
      state.selectedCategory = category;
    }
  }
});