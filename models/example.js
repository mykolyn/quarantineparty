module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    Corona: DataTypes.STRING,
    Earthquake: DataTypes.STRING,
    Flooding: DataTypes.TEXT
  });
  return Example;
};
