const { Model, DataTypes } = require('sequelize');

const RECIPE_TABLE = 'recipes';

const RecipeSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class Recipe extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: RECIPE_TABLE,
      modelName: 'Recipe',
      timestamps: false,
    };
  }
}

module.exports = {
  RECIPE_TABLE,
  RecipeSchema,
  Recipe,
};
