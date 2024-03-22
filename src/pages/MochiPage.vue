<template>
  <div class="top__img">
  </div>
  <div class="mochi-page">
    <div class="category-filter">
      <div class="mochi__filter">
        <select class="mochi__select" v-model="selectedCategory" @change="updateFilteredItems">
          <option class="mochi__option" value="">Все категории</option>
          <option class="mochi__option" v-for="category in categories" :value="category">{{ category }}</option>
        </select>
      </div>
      <div class="mochi__decor">
        <picture>
          <source media="(min-width: 1200px)" srcset='@/assets/img/mochi/mochi_rosemary.svg'>
          <source media="(min-width: 960px)" srcset='@/assets/img/mochi/mochi_rosemary.svg'>
          <img class="mochi__decor__img" alt="photo of desserts" src='@/assets/img/mochi/mochi_rosemary.svg'>
        </picture>
      </div>
    </div>
    <card-list></card-list>
  </div>
</template>

<script>
import CardList from "@/components/cards/CardList.vue";

export default {
  components: {
    CardList
  },
  data() {
    return {
      selectedCategory: ""
    }
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    }
  },
  methods: {
    updateFilteredItems() {
      this.$store.commit('updateSelectedCategory', this.selectedCategory);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/pages-styles/mochi";
</style>