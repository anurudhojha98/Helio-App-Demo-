'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Schedules', [{
      startDate: '2019-07-02 11:15:45',
      endDate: '2019-07-02 11:15:45',
      startTime: '2019-07-02 11:15:45',
      endTime: '2019-07-02 12:15:45',
      type: 'sample',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      startDate: '2019-07-02 11:15:45',
      endDate: '2019-07-02 11:15:45',
      startTime: '2019-07-02 11:15:45',
      endTime: '2019-07-02 12:15:45',
      type: 'sample',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      startDate: '2019-07-02 11:15:45',
      endDate: '2019-07-02 11:15:45',
      startTime: '2019-07-02 11:15:45',
      endTime: '2019-07-02 12:15:45',
      type: 'sample',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      startDate: '2019-07-02 11:15:45',
      endDate: '2019-07-02 11:15:45',
      startTime: '2019-07-02 11:15:45',
      endTime: '2019-07-02 12:15:45',
      type: 'sample',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Schedules', null, {});
  }
};
