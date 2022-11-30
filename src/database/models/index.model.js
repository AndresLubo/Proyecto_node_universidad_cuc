const { Customer, CustomerSchema } = require('./customer.model.js');
const { Order, OrderSchema } = require('./order.model.js');
const { Direction, DirectionSchema } = require('./direction.model.js');
const { Recipe, RecipeSchema } = require('./recipe.model');
const { OrderRecipe, OrderRecipeSchema } = require('./order_recipe.model');

const setupModels = (sequelize) => {
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  Direction.init(DirectionSchema, Direction.config(sequelize));
  Recipe.init(RecipeSchema, Recipe.config(sequelize));
  OrderRecipe.init(OrderRecipeSchema, OrderRecipe.config(sequelize))

  Customer.associate(sequelize.models);
  Order.associate(sequelize.models);
  Direction.associate(sequelize.models);
  Recipe.associate(sequelize.models);
  OrderRecipe.associate(sequelize)
};

module.exports = setupModels;
