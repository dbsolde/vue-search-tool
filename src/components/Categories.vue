<template>
    <div id="categories">
        <div class="item-container">
            <item-category :category="category" />
        </div>
    </div>    
</template>

<script>
import CategoryItem from './CategoryItem.vue'

export default {
    name: 'Categories',
    components: {
        'item-category': CategoryItem
    },
    computed: {
        category() {
            return this.$store.getters.getEnabledCategories;        
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/_variables.scss';

    #categories {
        max-width: $desktop-width;
        margin: 0 auto;
    }
</style>