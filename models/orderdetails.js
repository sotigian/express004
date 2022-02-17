'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // One To Many - Order to OrderDetails
      // OrderDetails.belongsTo(models.Order);

      // One To Many Relation - OrderDetails To Product
      // OrderDetails.hasMany(models.Product);
      // OrderDetails.belongsTo(models.Product);
    }
  }
  OrderDetails.init({
    // orderId: DataTypes.INTEGER,
    // productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'OrderDetails',
  });
  return OrderDetails;
};