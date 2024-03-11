<template>
    <div>
        <h3>{{ item.name }}</h3>
        <p>Цена: {{ item.price }} руб.</p>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'MenuItem',
    computed: {
        ...mapState(['menuItems']),
        item() {
            return this.menuItems.find(item => item.id === this.itemId);
        }
    },
    props: ['itemId']
}
</script>

<style lang="scss" scoped>

</style>