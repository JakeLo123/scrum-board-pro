const Sequelize = require('sequelize');
const db = require('../db');

const Task = db.define('task', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	priority: {
		type: Sequelize.ENUM('low', 'medium', 'high'),
		defaultValue: 'low'
	}
});

module.exports = Task;
