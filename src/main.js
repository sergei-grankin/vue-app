import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/messaging';
import 'firebase/storage';

Vue.use(Vuelidate);

Vue.config.productionTip = false

new Vue({
	el: '#app',
	router: router,
	store: store,
	components: { App },
	template: '<App/>',
	created() {
		var config = {
			apiKey: 'AIzaSyCCgPbYbJ9ltNXLtemZfNCYlsGdFzgxPQQ',
			authDomain: 'vue-app-c6b31.firebaseapp.com',
			databaseURL: 'https://vue-app-c6b31.firebaseio.com',
			projectId: 'vue-app-c6b31',
			storageBucket: 'vue-app-c6b31.appspot.com',
			messagingSenderId: '343367083891'
		};

		firebase.initializeApp(config);
	}
});
