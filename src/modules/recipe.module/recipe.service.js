const boom = require('@hapi/boom');
const { models } = require('../../database/sequelize');

class RecipeService {
  constructor() {}

  async findAll() {
    const recipes = await models.Recipe.findAll();
    return recipes;
  }

  async findOne(id) {
    const recipe = await models.Recipe.findByPk(id);

    if (!recipe) throw boom.notFound(`Recipe id: ${id} not found`);

    return recipe;
  }

  async create(data){
    const newRecipe = await models.Recipe.create(data)
    return newRecipe
  }

  async update(id, changes){
    const recipe = await this.findOne(id)
    const newRecipe = recipe.update(changes)
    return newRecipe
  }

  async delete(id){
    const recipe = await this.findOne(id)
    recipe.destroy()
    return {
      success: `Plato con id: ${id} eliminado con éxito`
    }
  }
}

module.exports = RecipeService;
