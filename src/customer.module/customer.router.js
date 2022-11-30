const express = require('express');
const router = express.Router();

const CustomerService = require('./customer.service');
const service = new CustomerService();

router.get('/', async (req, res, next) => {
  try {
    const customers = await service.findAll();
    res.json(customers);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await service.findOne(id);
    res.json(customer);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    const newCustomer = await service.create(data);
    res.status(201).json(newCustomer);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;

    const customer = await service.update(id, changes);
    res.json(customer);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await service.delete(id)
    res.json(response)
  } catch (error) {
    next(error);
  }
});

module.exports = router;
