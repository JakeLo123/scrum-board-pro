const Sequelize = require('sequelize');
const db = require('../db');

const Task = db.define('task', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  priority: {
    type: Sequelize.ENUM('low', 'medium', 'high'),
    defaultValue: 'low',
  },
  status: {
    type: Sequelize.ENUM('incomplete', 'in progress', 'blocked', 'complete'),
    defaultValue: 'incomplete',
  },
});

module.exports = Task;
