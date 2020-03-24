module.exports = function(sequelize, DataTypes){
    var emergencyList = sequelize.define("emergency_list", {
        Name: {
            type: DataTypes.STRING,
            allowNull: true
          },
          item_1: {
            type: DataTypes.STRING,
            allowNull: true
          },
          item_2: {
            type: DataTypes.STRING,
            allowNull: true
          },
          item_3: {
            type: DataTypes.STRING,
            allowNull: true
          },
          item_4: {
            type: DataTypes.STRING,
            allowNull: true
          },
          item_5: {
            type: DataTypes.STRING,
            allowNull: true
          },
          item_6: {
            type: DataTypes.STRING,
            allowNull: true
          },
          item_7: {
            type: DataTypes.STRING,
            allowNull: true
          },
          item_8: {
            type: DataTypes.STRING,
            allowNull: true
          },
          item_9: {
            type: DataTypes.STRING,
            allowNull: true
          },
          item_10: {
            type: DataTypes.STRING,
            allowNull: true
          },
          item_11: {
            type: DataTypes.STRING,
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
    })
    return emergencyList
}
