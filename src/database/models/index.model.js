const { Customer, CustomerSchema } = require('./customer.model.js');

const setupModels = (sequelize) => {
  Customer.init(CustomerSchema, Customer.config(sequelize));

  Customer.associate(sequelize.models);
};

module.exports = setupModels;
