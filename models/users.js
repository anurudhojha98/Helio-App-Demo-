'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    mobileNumber:DataTypes.STRING,
    address:DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};