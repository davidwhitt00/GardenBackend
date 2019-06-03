'use strict';
const chance = require('chance')()
const bcrypt = require('bcryptjs');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      uid: 'a4ef25b0-0a14-4df3-99a4-5082117fda99',
      first_name: chance.first(),
      last_name: chance.last(),
      email: chance.email(),
      password: bcrypt.hashSync('test', 10),
      role: 'admin',
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now())
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {})
  }
};
