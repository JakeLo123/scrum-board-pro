const Chance = require('chance');
const chance = new Chance();
const { User, Project, Task } = require('../server/database/models');

function randomDescription() {
	return chance.paragraph({ sentences: Math.floor(Math.random() * 5) + 1 });
}

const createUser = async (email, password) => {
	const user = await User.create({
		email: email,
		password: password
	});
	return user;
};

const createRandomProject = async (name) => {
	const project = await Project.create({
		name: name,
		description: randomDescription(),
		deadline: chance.date({ year: 2020 })
	});
	return project;
};

const createRandomTask = async (name) => {
	const priorityLevels = [ 'low', 'medium', 'high' ];
	const randomNum = Math.floor(Math.random() * 3) + 1;
	const task = await Task.create({
		name: name,
		description: randomDescription(),
		priority: priorityLevels[randomNum]
	});
	return task;
};

const bulkCreateTasks = async (num) => {
	const tasks = [];
	for (let i = 1; i <= num; ++i) {
		const task = await createRandomTask(`task${i}`);
		tasks.push(task);
	}
	return tasks;
};

module.exports = { createUser, createRandomProject, bulkCreateTasks };
