<template>
    <div id="breadcrumbs">
        <ul>
            <li class="active">
                <a :href="`/#/`">All categories</a>
            </li>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <li v-if="this.$route.params.catId">
                <a  v-if="this.$route.params.articleId"
                    :href="`/#/category/${this.$route.params.catId}`">
                    {{ category.title }}
                </a>
                <span v-else>{{ category.title }}</span>
            </li>
            <i v-if="this.$route.params.articleId" class="fa fa-angle-right" aria-hidden="true"></i>
            <li v-if="this.$route.params.articleId">
                <span>{{ article.title }}</span>
            </li>
        </ul>        
    </div>
</template>

<script>
export default {
    computed: {
        category() {
            return this.$store.getters['getActiveCategory'](this.$route.params.catId)
        },
        article() {
            return this.$store.getters['getArticle'](this.$route.params.articleId)
        },
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/_variables.scss';

    #breadcrumbs {
        padding: 10px 0;
        max-width: $desktop-width;
        margin: 0 auto;
        ul {
            display: flex;
            flex-direction: row;
            list-style: none;
            align-items: center;
            padding: 0;
            li {
                color: $text-gray;
                .active {
                    color: $green;
                }    
                a {
                    color: $green;
                    text-decoration: none;
                }
            }
            i {
                margin: 4px 10px 0;
                font-size: 14px;
                color: $text-gray;
            }  
        }
    }
</style>