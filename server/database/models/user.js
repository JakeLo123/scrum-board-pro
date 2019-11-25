const crypto = require('crypto');
const _ = require('lodash');
const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define(
  'user',
  {
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
    },
    salt: {
      type: Sequelize.STRING,
    },
  },
  {
    hooks: {
      beforeCreate: setSaltAndPassword,
      beforeUpdate: setSaltAndPassword,
    },
  }
);

// instance methods
User.prototype.hasCorrectPassword = function(candidatePassword) {
  if (encryptPassword(candidatePassword, this.salt) === this.password)
    return true;
  else return false;
};

User.prototype.sanitize = function() {
  return _.omit(this.toJSON(), ['password', 'salt']);
};

// utility functions
function generateSalt() {
  return crypto.randomBytes(16).toString('base64');
}

function encryptPassword(plainText, salt) {
  const hash = crypto.createHash('sha1');
  hash.update(plainText);
  hash.update(salt);
  return hash.digest('hex');
}

function setSaltAndPassword(user) {
  user.salt = generateSalt();
  user.password = encryptPassword(user.password, user.salt);
}

module.exports = User;
