<template>
    <div id="item-container">
        <div class="item" 
            v-for="cat in category" 
            :key="cat.id">
            <i class="fa" :class="['fa-'+cat.icon]"></i>
            <router-link :to="{path: `/category/${cat.id}`, query: { categoryName: cat.title } }">
                <h2>{{ cat.title }}</h2>
            </router-link>
            <p>{{ cat.totalArticle }} articles</p>
            <span>Last update {{ moment(cat.updatedOn).fromNow() }}</span>
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
        category: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/_variables.scss';
    #item-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        i {
            font-size: 60px;
            color: $green;
        }
        .item {
            border: 1px solid $border-color;
            background: $white;
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 29%;
            min-width: 300px;
            padding: 50px 10px;
            // margin-bottom: 20px;
            border-radius: 5px;
            margin: 8px;
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
            p {
                margin: 0;
                color: $green;
            }
            span {
                color: $text-gray;
            }
            @media only screen and (max-width: 768px){
                min-width: 250px;
            }     
            @media only screen and (max-width: $mobile-width){
                min-width: 200px;
                width: 100%;
                a {
                    h2 {                    
                        font-size: 18px;                   
                    }
                }
            }  
            
        }
    }
</style>