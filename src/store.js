import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categories: [],
        articles: [],
        author: {}
    },
    getters: {
        getEnabledCategories(state) {
            return state.categories
                    .filter( c => c.enabled )
                    .sort( (a,b) => a.order - b.order)
        },
        getActiveCategory: (state) => (catId) => {
            return state.categories.filter( cat => cat.id === catId)[0]
        },
        getRelatedCategories: (state) => (catId) => {
            return state.categories
                    .filter( cat => cat.id !== catId && cat.enabled)
        },
        getPublishedArticles(state) {
            return state.articles.filter( article => article.status === 'published')
        },
        getArticle: (state) => (articleId) => {
            return state.articles.filter( article => article.id === articleId)[0]
        },
        getAuthorDetails(state) {
            return state.author
        }
    },
    mutations: {
        fetch_categories(state, categories) {
            state.categories = categories
        },
        fetch_articles(state, articles) {
            state.articles = articles
        },
        searchCategory(state, newCategories) {
            state.categories = newCategories
        },
        fetch_author(state, author) {
            state.author = author
        }
    },
    actions: {
        getCategories({commit}) {
            axios
            .get("http://localhost:9000/api/categories")
            .then( (response) => {
                commit("fetch_categories", response.data)
            })
        },
        getArticles(context, catId) {
            axios
            .get(`http://localhost:9000/api/category/${catId}`)
            .then( (response) => {
                context.commit("fetch_articles", response.data)
            })
        },
        filterCategory({commit, state}, searchedCategory) {
            const filter = state.categories.filter( item => item.title.toLowerCase().includes(searchedCategory))
            commit('searchCategory', filter)
        },
        getAuthor(context, authorId) {
            axios
            .get(`http://localhost:9000/api/author/${authorId}`)
            .then( (response) => {
                context.commit("fetch_author", response.data)
            })
        }
    }
})