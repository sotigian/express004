# NodeJS with ExpressJS and Sequelize on a Many To Many Relationship

Steps to Reproduce
- Select a base folder (where a subfolder will be created) and run:
>`npx express-generator --view=ejs express003 `

- Run in terminal:
> `git init`

- Run in terminal:
> `npm install`

- Run in terminal:
> `npm install sequelize mysql2`

- Run in terminal:
> `npm install --save-dev sequelize-cli`

- Run in terminal:
> `npx sequelize-cli init`

- Amend the config/config.json file to reflect your MySQL Database server with your credentials and the database you need to use

- Run in terminal:
> `npx sequelize-cli model:generate --name Customer --attributes firstName:string,lastName:string,email:string,tel:string`

- Run in terminal:
> `npx sequelize-cli model:generate --name Product --attributes name:string,price:double,description:string`

- Run in terminal:
> `npx sequelize-cli model:generate --name Order --attributes customerId:integer,totalprice:double`

- Run in terminal:
> `npx sequelize-cli model:generate --name OrderDetails --attributes orderId:integer,productId:integer,quantity:integer,price:double`

- Amend the Customer and Order models as follows:
### models/customer.js
#### One To Many Relation - Customer To Order
> `Customer.hasMany(models.Order);`

### models/order.js
#### One To Many Relation - Customer To Order
> `Order.belongsTo(models.Customer);`

- Amend the Order and OrderDetails models as follows:
### models/order.js
#### One To Many Relation - Order To OrderDetails
> `Order.hasMany(models.OrderDetails);`

### models/orderdetails.js
#### One To Many Relation - Order To OrderDetails
> `OrderDetails.belongsTo(models.Order);`

- Amend the OrderDetails and Product models as follows:
### models/orderdetails.js
#### One To Many Relation - OrderDetails To Product
> `OrderDetails.hasMany(models.Product);`

### models/product.js
#### One To Many Relation - OrderDetails To Product
> `Product.belongsTo(models.OrderDetails);`

- Amend the migration file of the order as follows:
### migrations/20220215084920-create-order.js
> `customerId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Customers',
          key: 'id'
        }
      },
      productId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id'
        }
      },`

- Amend the migration file of the orderdetails as follows:
### migrations/20220216111652-create-order-details.js
> `orderId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Orders',
          key: 'id'
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id'
        }
      },`

- Create a MySQL database called: 
> `express004`

- Run in terminal:
> `npx sequelize-cli db:migrate` 
