<template>
	<div class="container">
		<div class="row">
			<div class="col-sm-12 mb-3 heading">
				<h4>Tasks</h4>
				<div class="buttons-group">
					<button type="button" class="btn btn-outline-secondary"
						@click="filter='all'"
					>All</button>
					<button type="button" class="btn btn-outline-secondary"
						@click="filter='active'"
					>Active</button>
					<button type="button" class="btn btn-outline-secondary"
						@click="filter='completed'"
					>Completed</button>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-6"
				v-for="task in tasksFilter"
				:key="task.id"
				:class="{completed: task.completed}"
			>
				<div class="card mb-3">
					<div class="card-body">
						<div class="header">
							<span class="badge badge-primary">{{task.taskType}}</span>
							<h5 class="card-title">{{task.title}}</h5>
						</div>
						<p class="card-text">{{task.description}}</p>
						<span class="">Task duration: {{task.time}}</span>
					</div>
					<div class="card-footer">
						<button class="btn btn-danger btn-sm">Remove</button>
						<div class="form-check">
							<label class="form-check-label"><input type="checkbox" class="form-check-input" v-model="task.completed"> Check completed</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				filter: 'all'
			}
		},
		computed: {
			tasksFilter() {
				if (this.filter === 'all') {
					return this.$store.getters.tasks;
				} else if (this.filter === 'active') {
					return this.$store.getters.tasksActive;
				} else if (this.filter === 'completed') {
					return this.$store.getters.tasksCompleted;
				}

				return this.$store.getters.tasks;
			}
		}
	}
</script>

<style>
	.heading {
		display: flex;
		justify-content: space-between;
	}
	.header {
		overflow: hidden;
	}
	.header .badge {
		float: right;
	}
	.header h5 {
		overflow: hidden;
	}
	.card-footer .form-check {
		float: right;
	}
</style>
