const express = require('express');
const router = express.Router();

const OrderRecipeService = require('./orderRecipe.service');
const service = new OrderRecipeService();

router.get('/', async (req, res, next) => {
  try {
    const items = await service.findAll();
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await service.findOne(id);
    res.json(item);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    const newItem = await service.create(data);
    res.json(newItem);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;

    const response = await service.update(id, changes);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await service.delete(id);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
