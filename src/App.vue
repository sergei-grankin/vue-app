<template>
	<div id="app">
		<div class="container">
			<div class="row">
				<ul class="nav">
					<li
						class="nav-item"
						v-for="link in linkMenu"
						v-bind:key="link.title"
					>
						<router-link :to="link.url">{{link.title}}</router-link>
					</li>
				</ul>
			</div>
		</div>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				linkMenu: [{
					title: 'Home',
					url: '/'
				}, {
					title: 'Tasks',
					url: '/tasks'
				}, {
					title: 'Login',
					url: '/login'
				}, {
					title: 'Registration',
					url: '/registration'
				}]
			}
		}
	}
</script>

<style>
	#app {
		padding: 20px 0  0;
	}

	.nav li {
		display: inline;
		vertical-align: top;
		padding: 0 15px 0 0;
	}

	.router-link-exact-active {
		color: #0056b3;
		text-decoration: underline;
	}
</style>
