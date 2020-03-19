module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Disasters", {
    Corona: DataTypes.STRING,
    Earthquake: DataTypes.STRING,
    Flooding: DataTypes.TEXT
  });
  return Example;
};
