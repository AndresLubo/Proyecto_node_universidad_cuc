const { Model, DataTypes } = require('sequelize');
const { DIRECTION_TABLE } = require('./direction.model');

const CUSTOMER_TABLE = 'customers';

const CustomerSchema = {
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
  age: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  birth: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  directionId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'direction_id',
    references: {
      model: DIRECTION_TABLE,
      key: 'id',
    },
    unique: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
};

class Customer extends Model {
  static associate(models) {
    this.belongsTo(models.Direction, { as: 'direction' });
    this.hasMany(models.Order, { as: 'order', foreignKey: 'customerId' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false,
    };
  }
}

module.exports = {
  CUSTOMER_TABLE,
  CustomerSchema,
  Customer,
};
