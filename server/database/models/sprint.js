const Sequelize = require('sequelize');
const db = require('../db');

const Sprint = db.define('sprint', {
	startDate: {
		type: Sequelize.DATEONLY
	},
	endDate: {
		type: Sequelize.DATEONLY
	}
});

module.exports = Sprint;
