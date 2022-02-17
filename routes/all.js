const db = require('../models/index');
const Customer = db.sequelize.models.Customer;
const Order = db.sequelize.models.Order;
const OrderDetails = db.sequelize.models.OrderDetails;
const Product = db.sequelize.models.Product;

var express = require('express');
var router = express.Router();

/* GET customers with orders page. */
router.get('/customers', async function(req, res, next) {
    let customers = await Customer.findAll({
        // required: true means INNER JOIN, brings data as where written on the db
        // required: false means OUTER JOIN, brings data as ORDER BY DESC
        include: 
        { 
          model: Order, 
          attributes: ['id', 'totalprice'], 
          required: true, 
          include: {
            model: Product,
            attributes: ['id', 'name', 'price', 'description'],
            required: true
          } 
        }
    });
  res.json(customers);
});

/* GET orders with orderdetails. */
router.get('/orders', async function(req, res, next) {
    let orders = await Order.findAll({
        include: { 
          model: Product,
          through: { attributes: ['quantity']},
          attributes: ['id', 'name', 'price', 'description'],
          required: true
        }
    });
  res.json(orders);
});

/* GET orderdetails with products. */
router.get('/ordetails', async function(req, res, next) {
    let ordetails = await OrderDetails.findAll({
        // include: Product
    });
  res.json(ordetails);
});

/* GET products. */
router.get('/products', async function(req, res, next) {
  let products = await Product.findAll();
  res.json(products);
});

module.exports = router;

