const chance = require('chance')()
const db = require('../models/index').sequelize;

module.exports = {
  up: (queryInterface, Sequelize) => {
    const transArray = [];
    for (let i = 0; i < 100; i++){
      transArray.push({
        customer_name: chance.name(),
        email: chance.email(),
        prod_id: i,
        credit_card: chance.cc(),
        price: 5.00,
        transaction_id: i + 2018,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      })
    }
    return queryInterface.bulkInsert('transactions', transArray, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('transactions', null, {})
  }
};
