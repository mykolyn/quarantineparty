module.exports = function(sequelize, DataTypes) {
  var auctions = sequelize.define("tp_auctions", {
  // var toBuy = sequelize.define("to_buy", {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
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
  return auctions;
};
