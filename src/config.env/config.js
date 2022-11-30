require('dotenv').config();

const config = {
  app: {
    port: process.env.PORT,
  },
  database: {
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    name: process.env.DATABASE_NAME,
  },
};

module.exports = config;
