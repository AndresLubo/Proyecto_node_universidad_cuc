const config = require('../config.env/config.js');

const DB_URL = `mysql://${config.database.user}:${config.database.password}@${config.database.host}:${config.database.port}/${config.database.name}`;


module.exports = {
  development: {
    url: DB_URL,
    dialect: 'mysql',
  },
  production: {
    url: DB_URL,
    dialect: 'mysql',
  },
};
