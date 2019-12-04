const { User, Project, Task } = require('../server/database/models');
const db = require('../server/database/db');
const {
  createUser,
  createRandomProject,
  bulkCreateTasks,
} = require('./seed-utils');

async function seed() {
  try {
    await db.sync({ force: true });
    console.log('db synced!');

    // create users
    const user1 = await createUser('jake@email.com', '123');
    const user2 = await createUser('zach@email.com', '123');
    const user3 = await createUser('vanessa@email.com', '123');
    const user4 = await createUser('bob@email.com', '123');
    const user5 = await createUser('dad@email.com', '123');

    // create projects
    const project1 = await createRandomProject('project1');
    const project2 = await createRandomProject('project2');
    const project3 = await createRandomProject('project3');
    const project4 = await createRandomProject('project4');
    const project5 = await createRandomProject('project5');

    await user1.addProjects([project1, project2, project3, project4, project5]);
    await user2.addProjects([project1, project2, project3, project4]);
    await user3.addProjects([project1, project2, project3]);
    await user4.addProjects([project1]);

    const tasks1 = await bulkCreateTasks(7);
    const tasks2 = await bulkCreateTasks(10);
    const tasks3 = await bulkCreateTasks(7);
    await project1.addTasks(tasks1);
    await project2.addTasks(tasks2);
    await project3.addTasks(tasks3);

    // console.log('user prototype', User.prototype);
    // console.log('user prototype', Project.prototype);
    console.log('seeding success!');
  } catch (err) {
    console.log('error seeding: ', err);
  } finally {
    db.close();
  }
}

seed();
