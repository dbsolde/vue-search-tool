<template>
    <div id="search-input">
        <input type="text" v-model="search" placeholder="Search for answers" />
        <button class="search-button" v-on:click="handleSearch"><i id="filtersubmit" class="fa fa-search" /></button>
    </div>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            search: ''
        }
    },    
    methods: {
        handleSearch() {
            if(this.search) {
                this.$store.dispatch("filterCategory", this.search.toLowerCase())
                this.search = ''
                
                if(this.$route.name !== 'categories') {
                    this.$router.replace({ path: '/' })
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../scss/_variables.scss';

    #search-input {
        max-width: 960px;
        margin: 0 auto;
        display: flex;
        justify-content: center;

        input {
            width: 100%;
            padding: 10px;
            border: 1px solid $border-color;
        }
        .search-button {
            background: $green;
            border: none;
            color: $white;
            padding: 15px 30px;
            width: 100px;
            font-size: 20px;
            &:hover {
                cursor: pointer;
            }
        }
    }
</style>