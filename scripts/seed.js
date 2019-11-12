const { User, Project, Task } = require('../server/database/models');

async function seed() {
	const user1 = await User.create({
		email: 'jake@scrum.com',
		password: '123'
	});
	if (user1) {
		console.log('seeding success with user: ', user1);
	} else {
		console.log('failed to seed');
	}
}

seed();
