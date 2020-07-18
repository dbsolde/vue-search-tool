<template>
	<div id="app">
		<tawk-header />
		<router-view />
	</div>
</template>

<script>
import Header from './components/Header.vue'

export default {
	components:{
		'tawk-header': Header
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