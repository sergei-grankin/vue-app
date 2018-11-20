import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);

Vue.config.productionTip = false

new Vue({
	el: '#app',
	router: router,
	store: store,
	components: { App },
	template: '<App/>'
});
