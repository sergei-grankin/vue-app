<template>
	<div class="container">
		<div class="row mb-4">
			<div class="col-sm-12">
				<h4 class="mb-3">Home</h4>
				<div class="form-group">
					<label>Task name</label>
					<input type="email" class="form-control" placeholder="Enter task name"
						v-model="taskTitle"
					>
				</div>
				<div class="form-group">
					<label>Task description</label>
					<textarea class="form-control" placeholder="Enter description"
						v-model="taskDescription"
					></textarea>
				</div>
				<div class="form-group">
					<label>Task type</label>
					<select class="form-control"
						v-model="taskType"
					>
						<option value="">Select type</option>
						<option value="Update">Update</option>
						<option value="Feadback">Feadback</option>
					</select>
				</div>
				<div class="form-group row">
					<label class="col-sm-2 col-form-label">Task time:</label>
					<div class="col-sm-2">
						<input type="email" class="form-control" placeholder="Hours"
							v-model="taskHours"
						>
					</div>
					<div class="col-sm-2">
						<input type="email" class="form-control" placeholder="Minutes"
							v-model="taskMinutes"
						>
					</div>
				</div>
				<div class="form-group">
					<button class="btn btn-primary" @click="newTask">Add new task</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				taskTitle: '',
				taskDescription: '',
				taskType: '',
				taskHours: '',
				taskMinutes: ''
			}
		},
		methods: {
			newTask() {
				if (this.taskTitle === '' || this.taskDescription === ''  || this.taskType === '') return;

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
				this.taskHours = '',
				this.taskMinutes = ''
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
	
</style>
