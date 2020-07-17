<template>
    <div id="article-container">
        <div class="row">
            <breadcrumbs />
            
            <div class="article-content">
                <i class="fa" :class="['fa-'+article.icon]"></i>
                <h1>{{ article.title }} </h1>
                <span>{{ moment(article.updatedOn).fromNow() }} by {{ author.name }}</span>                
                <p>
                    {{ article.content }}
                </p>
            </div>
        </div>
        <div class="row" v-if="isLoaded">
            <other-categories :categories="getRelatedCategories" />
        </div>
    </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs.vue'
import OtherCategories from '../components/OtherCategories.vue'

let moment = require('moment')
export default {
    props: [
        'catId',
        'articleId'
    ],
    data() {
        return {
            moment: moment,
            isLoaded: false
        }
    },
    components: {
        'breadcrumbs': Breadcrumbs,
        'other-categories': OtherCategories
    },
    mounted() {
        this.$store.dispatch("getAuthor", this.article.authorId)
        setTimeout( () => {
            this.isLoaded = true
        }, 500)
    },
    computed: {
        article() {
            return this.$store.getters['getArticle'](this.articleId)
        },
        author() {
            return this.$store.getters.getAuthorDetails
        },
        getRelatedCategories() {
            return this.$store.getters['getRelatedCategories'](this.catId)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/_variables.scss';
    
    #article-container {
        background: $containerbg;
        margin: 50px auto 100px;
        .row {
            margin: 0 auto;
        }
        
        .article-content {
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 20px;
            max-width: $desktop-width;
            margin: 0 auto;
            .fa {
                color: $green;
                font-size: 65px;
            }
            h1 {
                color: $green;
            }
            span {
                color: $text-gray;
            }
            p {
                text-align: center;
                line-height: 25px;
            }
            @media only screen and (max-width: $tablet-width){
			    flex-direction: column;
            }
        }
        
    }    
</style>