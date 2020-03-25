module.exports = function(sequelize, DataTypes) {
  var worldData = sequelize.define("world_data", {
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()")
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()")
    }
  });
  return worldData;
};
