const { Model, DataTypes } = require('sequelize');

const { ORDER_TABLE } = require('./order.model');
const { RECIPE_TABLE } = require('./recipe.model');

const ORDER_RECIPE_TABLE = 'orders-recipes';

const OrderRecipeSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  orderId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'order_id',
    references: {
      model: ORDER_TABLE,
      key: 'id',
    },
    unique: false,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  recipeId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'recipe_id',
    references: {
      model: RECIPE_TABLE,
      key: 'id',
    },
    unique: false,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class OrderRecipe extends Model {
  static associate(models) {
    // this.belongsTo(models.Order, { as: 'orderRecipe' });
    // this.belongsTo(models.Recipe, { as: 'orderRecipe' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_RECIPE_TABLE,
      modelName: 'OrderRecipe',
      timestamps: false,
    };
  }
}

module.exports = {
  ORDER_RECIPE_TABLE,
  OrderRecipeSchema,
  OrderRecipe,
};
