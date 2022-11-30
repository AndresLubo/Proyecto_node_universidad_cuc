const { Customer, CustomerSchema } = require('./customer.model.js');
const { Order, OrderSchema } = require('./order.model.js');
const { Direction, DirectionSchema } = require('./direction.model.js');

const setupModels = (sequelize) => {
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  Direction.init(DirectionSchema, Direction.config(sequelize))

  Customer.associate(sequelize.models);
  Order.associate(sequelize.models);
  Direction.associate(sequelize.models)
};

module.exports = setupModels;
