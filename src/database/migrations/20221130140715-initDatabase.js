'use strict';
const {
  CustomerSchema,
  CUSTOMER_TABLE,
} = require('../models/customer.model.js');
const { OrderSchema, ORDER_TABLE } = require('../models/order.model.js');
const {
  DirectionSchema,
  DIRECTION_TABLE,
} = require('../models/direction.model.js');
const { RecipeSchema, RECIPE_TABLE } = require('../models/recipe.model');
const {
  OrderRecipeSchema,
  ORDER_RECIPE_TABLE,
} = require('../models/order_recipe.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(DIRECTION_TABLE, DirectionSchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
    await queryInterface.createTable(RECIPE_TABLE, RecipeSchema);
    await queryInterface.createTable(ORDER_RECIPE_TABLE, OrderRecipeSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ORDER_TABLE);
    await queryInterface.dropTable(DIRECTION_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(RECIPE_TABLE);
    await queryInterface.dropTable(ORDER_RECIPE_TABLE);
  },
};
