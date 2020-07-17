<template>
    <!-- Refactor this :/ -->
    <div id="breadcrumbs">
        <ul>
            <li class="active">
                <a :href="`/#/`">All categories</a>
            </li>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <li v-if="this.$route.params.catId">
                <a  v-if="this.$route.params.articleId"
                    :href="`/#/category/${this.$route.params.catId}`">
                    {{ this.$route.query.categoryName }}
                </a>
                <span v-else>{{ this.$route.query.categoryName }}</span>
            </li>
            <i v-if="this.$route.params.articleId" class="fa fa-angle-right" aria-hidden="true"></i>
            <li v-if="this.$route.params.articleId">
                {{ this.$route.query.articleName }}
            </li>
        </ul>        
    </div>
</template>

<script>
export default {
    
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