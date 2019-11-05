'use strict';
module.exports = (sequelize, DataTypes) => {
  const Locations = sequelize.define('Locations', {
    locationName: DataTypes.STRING
  }, {});
  Locations.associate = function(models) {
    // associations can be defined here
  };
  return Locations;
};