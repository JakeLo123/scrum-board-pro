const Sequelize = require('sequelize');
const db = require('../db');

const Project = db.define('project', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	deadline: {
		type: Sequelize.DATEONLY
	}
});

module.exports = Project;
