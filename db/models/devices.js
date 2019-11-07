'use strict';
module.exports = (sequelize, DataTypes) => {
  const Devices = sequelize.define('Devices', {
    deviceName: DataTypes.STRING,
    macAddress: DataTypes.STRING,
    ipAddress: DataTypes.STRING,
    deviceStatus: DataTypes.BOOLEAN
  }, {});
  Devices.associate = function (models) {
    // associations can be defined here
  };
  return Devices;
};