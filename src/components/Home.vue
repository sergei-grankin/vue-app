<template>
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<h4 class="mb-4">Home</h4>
			</div>
		</div>
		<div class="row mb-4">
			<div class="col-lg-6">
				<form @submit.prevent="newTask">
					<div class="form-group" :class="{'form-group-error': $v.taskTitle.$error}">
						<label>Task name</label>
						<input type="text" class="form-control" placeholder="Enter task name"
							v-model.trim="$v.taskTitle.$model"
							:class="{'form-group-error': $v.taskTitle.$error}"
							@change="$v.taskTitle.$touch()"
						>
						<div class="error" v-if="!$v.taskTitle.required">Field is required</div>
					</div>
					<div class="form-group" :class="{'form-group-error': $v.taskDescription.$error}">
						<label>Task description</label>
						<textarea class="form-control" placeholder="Enter description"
							v-model.trim="$v.taskDescription.$model"
							:class="{'form-group-error': $v.taskDescription.$error}"
							@change="$v.taskDescription.$touch()"
						></textarea>
						<div class="error" v-if="!$v.taskDescription.required">Field is required</div>
					</div>
					<div class="form-group" :class="{'form-group-error': $v.taskType.$error}">
						<label>Task type</label>
						<select class="form-control"
							v-model.trim="$v.taskType.$model"
							:class="{'form-group-error': $v.taskType.$error}"
							@change="$v.taskType.$touch()"
						>
							<option value="">Select type</option>
							<option value="Update">Update</option>
							<option value="Feadback">Feadback</option>
						</select>
						<div class="error" v-if="!$v.taskDescription.required">Field is required</div>
					</div>
					<p>Enter task time</p>
					<div class="form-group row">
						<div class="col-sm-2">
							<label for="hours">Hours</label>
							<input id="hours" type="text" class="form-control" placeholder="Hours"
								v-model="taskHours"
							>
						</div>
						<div class="col-sm-2">
							<label for="minutes">Minutes</label>
							<input id="minutes" type="text" class="form-control" placeholder="Minutes"
								v-model="taskMinutes"
							>
						</div>
					</div>
					<div class="form-group mb-3">
						<button class="btn btn-primary mb-2" type="submit" :disabled="submitStatus === 'PENDING'">Add new task</button>
						<div class="errors-box">
							<p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
							<p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
							<p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import {required} from 'vuelidate/lib/validators';

	export default {
		data() {
			return {
				taskTitle: '',
				taskDescription: '',
				taskType: '',
				taskHours: '1',
				taskMinutes: '30',
				submitStatus: null
			}
		},
		validations: {
			taskTitle: {
				required
			},
			taskDescription: {
				required
			},
			taskType: {
				required
			}
		},
		methods: {
			newTask() {
				// if (this.taskTitle === '' || this.taskDescription === ''  || this.taskType === '') return;
				this.$v.$touch();

				if (this.$v.$invalid) {
					this.submitStatus = 'ERROR';
				} else {
					this.submitStatus = 'PENDING';

					setTimeout(() => {
						this.submitStatus = 'OK';

						const task = {
							title: this.taskTitle,
							description: this.taskDescription,
							taskType: this.taskType,
							time: this.taskTime,
							completed: false,
							editing: false
						};

						this.$store.dispatch('newTask', task);

						this.taskTitle = '';
						this.taskDescription = '';
						this.taskType = '';
						this.taskHours = '1';
						this.taskMinutes = '30';
						this.$v.$reset();
					}, 500);
				}
			},
			getHoursAndMinutes: function(time) {
				let hours = Math.trunc(time / 60);
				let minutes = time % 60;

				return hours + ' Hours ' + minutes + ' Minutes';
			}
		},
		computed: {
			taskTime() {
				let minutes = this.taskHours * 60 + (+this.taskMinutes);

				return this.getHoursAndMinutes(minutes);
			}
		}
	}
</script>

<style>
	.form-group-error input,
	.form-group-error textarea,
	.form-group-error select {
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
