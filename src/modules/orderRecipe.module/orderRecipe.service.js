const boom = require('@hapi/boom');
const { models } = require('../../database/sequelize');

class OrderRecipeService {
  constructor() {}

  async findAll() {
    const ordersRecipes = await models.OrderRecipe.findAll();
    return ordersRecipes;
  }

  async findOne(id) {
    const item = await models.OrderRecipe.findByPk(id);

    if (!item) throw boom.notFound(`Item id: ${id} not found`);
    return item;
  }

  async create(data) {
    const newItem = await models.OrderRecipe.create(data);
    return newItem;
  }

  async update(id, changes) {
    const item = await this.findOne(id);
    item.update(changes);
    return item;
  }

  async delete(id) {
    const item = await this.findOne(id);
    item.destroy();
    return {
      success: `Item con id ${id} eliminado`,
    };
  }
}

module.exports = OrderRecipeService;
