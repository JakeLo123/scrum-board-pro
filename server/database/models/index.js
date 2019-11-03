const User = require('./user');
const Project = require('./project');
const Sprint = require('./sprint');
const Task = require('./task');
// const { Message } = require('./message');

Project.belongsToMany(User, { through: 'User_Project' });
User.hasMany(Project);

Project.hasMany(Sprint);
Sprint.belongsTo(Project);

Sprint.hasMany(Task);
Task.belongsTo(Sprint);

Task.belongsTo(User);

module.exports = { User, Project, Sprint, Task };
