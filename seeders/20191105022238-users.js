'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'Anu',
      email: 'anurudh.ojha@neocepts.co.in',
      password: 'Anurudh@123',
      mobileNumber: '9929920292',
      address: "Noida",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Rajesh',
      email: 'rajesh@neocepts.co.in',
      password: 'Rajesh@123',
      mobileNumber: '9929920292',
      address: "Noida",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Prashant',
      email: 'prashant@neocepts.co.in',
      password: 'Prashant@123',
      mobileNumber: '9929920292',
      address: "Ghaziabad",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
