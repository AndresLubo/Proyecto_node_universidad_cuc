const express = require('express');

//? routers
const customerRouter = require('../modules/customer.module/customer.router')
const orderRouter = require('../modules/order.module/order.router')
const recipeRouter = require('../modules/recipe.module/recipe.router')
const orderRecipeRouter = require('../modules/orderRecipe.module/orderRecipe.router')

const RouterApi = (app) => {
  const router = express.Router();
  router.use('/clientes', customerRouter);
  router.use('/pedidos', orderRouter);
  router.use('/platos', recipeRouter);
  router.use('/items', orderRecipeRouter)
  // router.use('/inventario');

  app.use('/api/v1', router);
};

module.exports = { RouterApi };
