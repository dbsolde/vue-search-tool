<template>
    <div id="category-container">
        <div class="row">
            <breadcrumbs />
            
            <div class="category-content">
                <!-- Selected or active category -->
                <selected-category :id="catId" />
                
                <!-- Articles -->
                <articles :id="catId" />
            </div>
        </div>
        <div class="row" v-if="isLoaded">
            <other-categories :categories="getRelatedCategories" />
        </div>
    </div>
</template>

<script>
import CategoryActive from '../components/CategoryActive.vue'
import ArticleItem from '../components/ArticleItem.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import OtherCategories from '../components/OtherCategories.vue'


export default {
    props: [
        'catId'
    ],
    components: {
        'selected-category': CategoryActive,
        'articles': ArticleItem,
        'breadcrumbs': Breadcrumbs,
        'other-categories': OtherCategories
    },
    data() {
        return {
            isLoaded: false
        }
    },
    mounted() {
        this.$store.dispatch("getCategories", { self: this })
        setTimeout( () => {
            this.isLoaded = true
        }, 500)
    },
    computed: {
        getRelatedCategories() {
            return this.$store.getters['getRelatedCategories'](this.catId)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/_variables.scss';
    
    #category-container {
        background: $containerbg;
        margin: 50px auto 0;
        .row {
            margin: 0 auto;
            &:last-child {
                border-top: 1px solid $text-gray;
            }
        }
        
        .category-content {
            display: flex;
            justify-content: space-between;
            padding: 10px 20px;
            max-width: $desktop-width;
            margin: 0 auto;
            @media only screen and (max-width: $tablet-width){
			    flex-direction: column;
            }
        }
        
    }    
</style>