'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // One To Many - Customer To Order
      // Order.belongsTo(models.Customer);
      
      // One To Many - Order to OrderDetails
      // Order.hasMany(models.OrderDetails);
      Order.belongsToMany(models.Product, { through: models.OrderDetails });
    }
  }
  Order.init({
    // customerId: DataTypes.INTEGER,
    totalprice: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};