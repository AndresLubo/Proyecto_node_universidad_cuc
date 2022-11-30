const { Customer, CustomerSchema } = require('./customer.model.js');
const {Order, OrderSchema} = require('./order.model.js')

const setupModels = (sequelize) => {
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize))

  Customer.associate(sequelize.models);
  Order.associate(sequelize.models)
};

module.exports = setupModels;
