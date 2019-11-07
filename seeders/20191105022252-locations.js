'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [{
      locationName: 'Noida',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      locationName: 'Ghaziabad',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      locationName: 'Delhi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      locationName: 'Meerut',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});

  }
};
