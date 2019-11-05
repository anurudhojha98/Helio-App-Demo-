'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Devices', [{
        macAddress: '192::292:443.23',
        ipAddress:'192.42.23.424',
        deviceStatus:true,
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Devices', null, {});
  }
};
