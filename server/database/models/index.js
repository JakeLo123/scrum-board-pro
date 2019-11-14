const User = require('./user');
const Project = require('./project');
const Task = require('./task');
// const Sprint = require('./sprint');
// const { Message } = require('./message');

Project.belongsToMany(User, { through: 'User_Project' });
User.belongsToMany(Project, { through: 'User_Project' });

Project.hasMany(Task);
Task.belongsTo(Project);

User.hasMany(Task);
Task.belongsTo(User);

module.exports = { User, Project, Task };
