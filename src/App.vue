<template>
	<div id="app">
		<tawk-header />
		<search-input />
		<router-view />
	</div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'

export default {
	components:{
		'tawk-header': Header,
		'search-input': Search
	}
}
</script>

<style lang="scss" scoped>
	@import 'scss/main.scss';
	@import 'scss/_variables.scss';
	
	#app {
		font-family: $font-family;
	}
</style>