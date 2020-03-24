module.exports = function(sequelize, DataTypes) {
  var corona = sequelize.define("corona", {
    province: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // eslint-disable-next-line camelcase
    infected: {
      type: DataTypes.INTEGER,
      allowNull: true
      // eslint-disable-next-line camelcase
    },
    death: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recovered: {
      type: DataTypes.INTEGER,
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

  return corona;
};
