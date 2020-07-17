<template>
    <div id="other-categories">
        <h2>Other Categories</h2>
        <carousel 
            :nav="false" 
            :dots="false" 
            :responsive="{0:{items:1,nav:false},600:{items:3,nav:false}}">
            <template slot="prev">
                <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
            </template>
            <div class="item" 
                v-for="cat in categories" 
                :key="cat.id">
                <i class="fa" :class="['fa-'+cat.icon]"></i>
                <router-link :to="{path: `/category/${cat.id}`, query: { categoryName: cat.title } }">
                    <h2>{{ cat.title }}</h2>
                </router-link>
                <p>{{ cat.totalArticle }} articles</p>
                <span>Last update {{ cat.updatedOn }} days ago</span>
            </div>
            <template slot="next">
                <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
            </template>
        </carousel>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
    props: [
        'categories'
    ],
    components: {
        'carousel': carousel,
    },
}
</script>

<style lang="scss" scoped>
    @import '../scss/_variables.scss';

    #other-categories {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px 20px 10px;    
        max-width: $desktop-width;
        margin: 0 auto;        
        h2 {
            text-align: center;
            color: $text-gray;
        }
        #item-container {
            justify-content: start;
            .item {
                margin: 5px;
            }
        }

        i {
            font-size: 60px;
            color: $green;
        }
        position: relative;
        .fa {
            cursor: pointer;
            color: $white;
            font-size: 35px;
            &.fa-chevron-circle-right {
                position: absolute;
                right: -10px;
                top: 50%;      
                background: $text-gray;
                border-radius: 50%;         
            }
            &.fa-chevron-circle-left {
                position: absolute;
                left: -20px;
                top: 50%;
                background: $text-gray;
                border-radius: 50%;
            }
            @media only screen and (max-width: $mobile-width){
                font-size: 25px;
                &.fa-chevron-circle-right {
                    right: 5px;
                }
                &.fa-chevron-circle-left {
                    left: 5px;
                }
            }  
        }
        .item {
            border: 1px solid $border-color;
            background: $white;
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 30%;
            min-width: 300px;
            padding: 50px 10px;
            margin-bottom: 20px;
            border-radius: 5px;
            &:hover {
                background: $containerbg;
            }
            a {
                text-decoration: none;
                h2 {                    
                    margin: 20px 0;
                    color: $text-black;                        
                }
            }
            p,
            .fa {
                margin: 0;
                color: $green;
            }
            span {
                color: $text-gray;
            }   
            @media only screen and (max-width: $mobile-width){
                min-width: 200px;
                width: 80%;
                margin: 0 auto;
            }  
            
        }
    }
</style>