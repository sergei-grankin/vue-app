import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Task from '../components/Task.vue';
import Login from '../components/Auth/Login.vue';
import Registration from '../components/Auth/Registration.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		name: 'home',
		component: Home
	}, {
		path: '/tasks',
		name: 'tasks',
		component: Task
	}, {
		path: '/login',
		name: 'login',
		component: Login
	}, {
		path: '/registration',
		name: 'registration',
		component: Registration
	}]
});
