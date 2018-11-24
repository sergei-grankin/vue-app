<template>
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<h4 class="mb-4">Registration</h4>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-6 mb-3">
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
					<div class="form-group" :class="{'form-group-error': $v.repeatPassword.$error}">
						<label for="inputPassword2">Confirm Password</label>
						<input type="password" class="form-control" id="inputPassword2" placeholder="Password"
							v-model.trim="$v.repeatPassword.$model"
							:class="{'error-field': $v.repeatPassword.$error}"
							@change="$v.repeatPassword.$touch()"
						>
						<div class="error" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</div>
					</div>
					<div class="form-group mb-3">
						<button class="btn btn-primary mb-2" type="submit" :disabled="submitStatus === 'PENDING'">Registration</button>
						<div class="errors-box">
							<p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
							<p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
							<p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
						</div>
					</div>
					<p>Do you have account? <router-link to="/login">Enter here</router-link></p>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import {required, email, minLength, sameAs} from 'vuelidate/lib/validators';

	export default {
		data() {
			return {
				email: '',
				password: '',
				repeatPassword: '',
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
			},
			repeatPassword: {
				sameAsPassword: sameAs('password')
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
