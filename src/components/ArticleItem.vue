<template>
    <div id="article-item">
        <div class="item"
            v-for="article in articles"
            :key="article.id">
            <i class="fa" :class="['fa-'+article.icon]"></i>
            <div class="content">
                <router-link :to="{
                    path: `/category/${id}/${article.id}`, 
                    query: { articleName: article.title, categoryName: category } }">
                    <h3>{{ article.title }}</h3>
                </router-link>
                <span>{{ moment(article.updatedOn).fromNow() }}</span>
            </div>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
    </div>
</template>

<script>
let moment = require('moment')

export default {
    name: 'Articles',
    data() {
        return {
            moment: moment,
            category: this.$route.query.categoryName
        }
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    mounted() {
        this.$store.dispatch("getArticles", this.id)
    },
    computed: {
        articles() {
            return this.$store.getters.getPublishedArticles
        }
    },
    watch: {
        id() {
            this.$store.dispatch("getArticles", this.id)
            window.scrollTo(0,0);           
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/_variables.scss';

    #article-item {
        width: 65%;
        @media only screen and (max-width: $tablet-width){
           width: 100%;
           margin-bottom: 50px;
           .item {
                padding: 10px;
           }
        }
        .item {                                    
            display: flex;
            flex-direction: row;
            padding: 20px 30px;
            align-items: center;
            position: relative;
            background: $white;
            margin-bottom: 20px;
            border: 1px solid $border-color;
            border-radius: 5px;
            &:hover {
                cursor: pointer;
                background: $containerbg;
            }
            .content {
                a {
                    text-decoration: none;
                    h3 {
                        margin: 10px 0;
                        color: $text-black;
                    }
                }
                span {
                    color: $text-gray;
                }
            }
            i {
                color: $green;
                font-size: 20px;
                &:first-child {
                    width: 50px;
                }
                &:last-child {
                    position: absolute;
                    right: 30px;
                    @media only screen and (max-width: $tablet-width){
                        right: 10px;
                    }
                }                        
            }
        }
    }
</style>