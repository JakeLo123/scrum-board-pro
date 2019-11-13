const { User, Project, Task } = require('../server/database/models');

async function seed() {
	try {
		const user1 = await User.create({
			email: 'jake@scrum.com',
			password: '123'
		});
		const user2 = await User.create({
			email: 'mike@scrum.com',
			password: '456'
		});
		const user3 = await User.create({
			email: 'loew@scrum.com',
			password: '789'
		});
		const user4 = await User.create({
			email: 'rocky@scrum.com',
			password: '123'
		});
		const user5 = await User.create({
			email: 'jofus@scrum.com',
			password: '456'
		});
		// const getJob = await Project.create({

		// })
		console.log('seeding success!');
	} catch (err) {
		console.log('error seeding: ', err);
	}
}

seed();
