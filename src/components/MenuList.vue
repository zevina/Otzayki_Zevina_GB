<template>
    <div>
        <h2>Список товаров</h2>
        <menu-item v-for="item in menuItems" :key="item.id" :item="item" />
    </div>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
    name: 'MenuList',
    components: {
        MenuItem
    },
    computed: {
        menuItems() {
            return this.$store.state.menuItems;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>