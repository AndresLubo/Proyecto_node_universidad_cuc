const { Sequelize } = require('sequelize');

//? local imports
const config = require('../config.env/config.js');
const DB_URL = `mysql://${config.database.user}:${config.database.password}@${config.database.host}:${config.database.port}/${config.database.name}`;
const setupModels = require('./models/index.model.js')

const sequelize = new Sequelize(DB_URL, {
  dialect: 'mysql',
  logging: true,
});


setupModels(sequelize)
module.exports = sequelize;
