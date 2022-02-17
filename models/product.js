'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // One To Many Relation - OrderDetails To Product
      // Product.belongsTo(models.OrderDetails);
      Product.belongsToMany(models.Order, { through: models.OrderDetails });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};