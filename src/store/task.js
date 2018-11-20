export default {
	state: {
		tasks: [{
			id: 1,
			title: 'Task 1',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae reprehenderit vitae, quibusdam aut possimus illum consequatur ipsum in necessitatibus',
			taskType: 'Update',
			completed: true,
			editing: false,
			time: '1 Hour'
		}, {
			id: 2,
			title: 'Task 2',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae reprehenderit vitae, quibusdam aut possimus illum consequatur ipsum in necessitatibus',
			taskType: 'Feadback',
			completed: false,
			editing: false,
			time: '2 Hours'
		}, {
			id: 3,
			title: 'Task 3',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae reprehenderit vitae, quibusdam aut possimus illum consequatur ipsum in necessitatibus',
			taskType: 'Feadback',
			completed: false,
			editing: false,
			time: '30 Minutes'
		}]
	},
	mutations: {
		newTask(state, payload) {
			state.tasks.push(payload);
		}
	},
	actions: {
		newTask({commit}, payload) {
			payload.id = Math.random();
			commit('newTask', payload);
		}
	},
	getters: {
		tasks(state) {
			return state.tasks;
		},
		tasksCompleted(state) {
			return state.tasks.filter(task => {
				return task.completed;
			});
		},
		tasksActive(state) {
			return state.tasks.filter(task => {
				return task.completed === false;
			});
		}
	}
}