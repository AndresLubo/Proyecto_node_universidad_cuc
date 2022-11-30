const express = require('express');

//? routers
const customerRouter = require('../customer.module/customer.router.js')

const RouterApi = (app) => {
  const router = express.Router();
  router.use('/clientes', customerRouter);
  // router.use('/pedidos');
  // router.use('/platos');
  // router.use('/inventario');

  app.use('/api/v1', router);
};

module.exports = { RouterApi };
