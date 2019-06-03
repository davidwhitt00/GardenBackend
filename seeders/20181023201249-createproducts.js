'use strict';
const chance = require('chance')()

module.exports = {
  up: (queryInterface, Sequelize) => {
    let productArr = [];

    for (let i = 1; i < 101; i++) {
      const productObj = {
        id: i,
        product_name: `plant${i}`,
        product_description: chance.paragraph({sentences: 1}),
        product_price: 5.00,
        product_image: 'image',
        userUid:'a4ef25b0-0a14-4df3-99a4-5082117fda99',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      };
      productArr.push(productObj);
    }
    return queryInterface.bulkInsert('products', productArr, {});
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});

  }
};
