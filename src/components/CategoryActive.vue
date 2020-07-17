<template>
    <div id="selected-category">
        <div class="category">
            <span class="articles-count">
                <i class="fa fa-file" aria-hidden="true"></i> {{ activeCategory.totalArticle }} 
            </span>
            <i class="fa icon" :class="['fa-'+activeCategory.icon]"></i>
            <h2>{{ activeCategory.title }}</h2>
            <span>Updated {{ moment(activeCategory.updatedOn).fromNow() }}</span>
            <hr />
            <i class="fa fa-info-circle"></i>
            <p>{{ activeCategory.description }}</p>
        </div>
    </div>
</template>

<script>
let moment = require('moment')
export default {
    name: 'CategoryItem',
    data() {
        return {
            moment: moment            
        }
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        activeCategory() {
            return this.$store.getters['getActiveCategory'](this.id)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/_variables.scss';

    #selected-category {
        width: 30%;
        @media only screen and (max-width: $tablet-width){
           width: 100%;
           margin-bottom: 50px;
        }
        .category {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            padding: 30px 0px;
            background: $white;
            border: 1px solid $border-color;
            .articles-count {
                position: absolute;
                right: 20px;
                top: 20px;
            }
            h2 {
                font-size: 20px;
                margin: 30px 0 10px;
            }
            span {
                color: $text-gray;
            }
            hr {
                border: 1px solid $border-color;
                width: 100%;
                margin: 30px 0px;
            }
            i {
                color: $green;
                &.icon {
                    font-size: 50px;
                }
            }
            p {
                color: $text-gray;
                text-align: center;
                padding: 10px 25px;
            }
        }
    }

</style>