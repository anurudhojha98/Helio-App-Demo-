'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schedules = sequelize.define('Schedules', {
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    type: DataTypes.STRING,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE
  }, {});
  Schedules.associate = function(models) {
    // associations can be defined here
  };
  return Schedules;
};