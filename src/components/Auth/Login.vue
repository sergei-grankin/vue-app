<template>
	<div class="container">
		<div class="row">
			<div class="col-sm-12 mb-3">
				<h4 class="mb-4">Login</h4>
				<form @submit.prevent="onSubmit">
					<div class="form-group" :class="{'form-group-error': $v.email.$error}">
						<label for="inputEmail">Email address</label>
						<input type="email" class="form-control" id="inputEmail" placeholder="Enter email"
							v-model.trim="$v.email.$model"
							:class="{'error-field': $v.email.$error}"
							@change="$v.email.$touch()"
						>
						<div class="error" v-if="!$v.email.required">Field is required</div>
						<div class="error" v-if="!$v.email.email">Email is not correct</div>
					</div>
					<div class="form-group" :class="{'form-group-error': $v.password.$error}">
						<label for="inputPassword1">Password</label>
						<input type="password" class="form-control" id="inputPassword1" placeholder="Password"
							v-model.trim="$v.password.$model"
							:class="{'error-field': $v.password.$error}"
							@change="$v.password.$touch()"
						>
						<div class="error" v-if="!$v.password.required">Password is required.</div>
						<div class="error" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</div>
					</div>
					<div class="form-group mb-3">
						<button class="btn btn-primary mb-2" type="submit" :disabled="submitStatus === 'PENDING'">Login</button>
						<div class="errors-box">
							<p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
							<p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
							<p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
						</div>
					</div>
					<p>Need registration? <router-link to="/registration">Enter here</router-link></p>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import {required, email, minLength} from 'vuelidate/lib/validators';

	export default {
		data() {
			return {
				email: '',
				password: '',
				submitStatus: null
			}
		},
		validations: {
			email: {
				required,
				email
			},
			password: {
				required,
				minLength: minLength(6)
			}
		},
		methods: {
			onSubmit() {
				this.$v.$touch();

				if (this.$v.$invalid) {
					this.submitStatus = 'ERROR';
				} else {
					this.submitStatus = 'PENDING';

					const user = {
						email: this.email,
						password: this.password
					}

					console.log(user);

					setTimeout(() => {
						this.submitStatus = 'OK';
					}, 500);
				}
			}
		}
	}
</script>

<style>
	.form-group-error input {
		border-color: #f00;
	}

	.error {
		display: none;
		color: #f00;
	}

	.form-group-error .error {
		display: block;
	}

	.errors-box {
		display: inline-block;
		vertical-align: middle;
		padding: 5px 0 0 10px;
	}
</style>
