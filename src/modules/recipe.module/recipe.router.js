const express = require('express');
const router = express.Router();

const RecipeService = require('./recipe.service');
const service = new RecipeService();

router.get('/', async (req, res, next) => {
  try {
    const recipes = await service.findAll();
    res.json(recipes);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const recipe = await service.findOne(id);
    res.json(recipe);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    const newRecipe = await service.create(data);
    res.json(newRecipe);
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
