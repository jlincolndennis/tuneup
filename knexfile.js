require('dotenv').load();

module.exports = {

  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 1,
      max: 1
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 1,
      max: 1
    }
  }

};
