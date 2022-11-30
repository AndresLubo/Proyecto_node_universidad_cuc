const express = require('express');

//? routers
const customerRouter = require('../modules/customer.module/customer.router')
const orderRouter = require('../modules/order.module/order.router')

const RouterApi = (app) => {
  const router = express.Router();
  router.use('/clientes', customerRouter);
  router.use('/pedidos', orderRouter);
  // router.use('/platos');
  // router.use('/inventario');

  app.use('/api/v1', router);
};

module.exports = { RouterApi };
