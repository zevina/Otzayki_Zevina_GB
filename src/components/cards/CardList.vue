<template>
    <div class="card-list">
        <card-item v-for="(item, index) in filteredItems" :item="item" :key="index"></card-item>
    </div>
</template>

<script>
import CardItem from '@/components/cards/CardItem.vue';

export default {
    components: {
        CardItem
    },
    computed: {
        filteredItems() {
            // фильтрация товаров по категории (с использованием хранилища Vuex)
            const category = this.$store.state.selectedCategory;
            if (category) {
                return this.$store.getters.filteredItemsByCategory(category);
            }
            return this.$store.state.items;
        }
    }
};
</script>

<style lang="scss" scoped></style>