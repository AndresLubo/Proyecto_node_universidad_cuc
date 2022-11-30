const { Model, DataTypes } = require('sequelize');

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
  birthDate: {
    allowNull: false,
    type: DataTypes.DATE,
  },
};

class Customer extends Model {
  static associate(models) {
    return models;
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
