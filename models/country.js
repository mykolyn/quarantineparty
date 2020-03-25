module.exports = function(sequelize, DataTypes) {
  var worldData = sequelize.define("countries", {
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
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
