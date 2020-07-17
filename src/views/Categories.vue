<template>
    <div id="container">
		<categories />
    </div>
</template>

<script>
import Categories from '../components/Categories.vue'

export default {
	components:{
		'categories': Categories
	},
	mounted() {
		this.$store.dispatch("getCategories", { self: this })
	}
}
</script>

<style lang="scss" scoped>
    @import '../scss/_variables.scss';

    #container {
		background: $containerbg;
		margin-top: 100px;
		padding: 100px 100px 200px;
		@media only screen and (max-width: $tablet-width){
			padding: 50px 50px 200px;
		}
		@media only screen and (max-width: $mobile-width){
			padding: 25px;
		}
    }
</style>