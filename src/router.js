import Vue from 'vue';
import Router from 'vue-router';
import Categories from './views/Categories.vue';
import Category from './views/Category.vue';
import Article from './views/Article.vue';


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'categories',
            component: Categories
        },
        {
            path: '/category/:catId',
            name: 'Category',
            props: true,
            component: Category
        },
        {
            path: '/category/:catId/:articleId',
            name: 'Category',
            props: true,
            component: Article
        }
    ]
})