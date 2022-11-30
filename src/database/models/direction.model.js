const { Model, DataTypes } = require('sequelize');

const DIRECTION_TABLE = 'directions';

const DirectionSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  street: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  race: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  nomenclature: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class Direction extends Model {
  static associate(models) {
    return models;
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DIRECTION_TABLE,
      modelName: 'Direction',
      timestamps: false,
    };
  }
}

module.exports = {
  DIRECTION_TABLE,
  DirectionSchema,
  Direction,
};
