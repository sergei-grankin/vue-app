<template>
	<div class="container">
		<div class="row">
			<div class="col-sm-12 mb-3">
				<h4 class="mb-4">Registration</h4>
				<form>
					<div class="form-group" :class="{'form-group-error': $v.email.$error}">
						<label for="inputEmail1">Email address</label>
						<input type="email" class="form-control" id="inputEmail1" placeholder="Enter email"
							v-model="email"
							:class="{'error-field': $v.email.$error}"
							@change="$v.email.$touch()"
						>
					</div>
					<div class="form-group">
						<label for="inputPassword1">Password</label>
						<input type="password" class="form-control" id="inputPassword1" placeholder="Password"
							v-model="password"
						>
					</div>
					<div class="form-group">
						<label for="inputPassword2">Confirm Password</label>
						<input type="password" class="form-control" id="inputPassword2" placeholder="Password"
							v-model="confirmPassword"
						>
					</div>
					<button type="submit" class="btn btn-primary">Registration</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import {required, email} from 'vuelidate/lib/validators';

	export default {
		data() {
			return {
				email: '',
				password: '',
				confirmPassword: ''
			}
		},
		validations: {
			email: {
				required,
				email
			}
		}
	}
</script>

<style>
	.form-group-error input {
		border-color: #f00;
	}
</style>
