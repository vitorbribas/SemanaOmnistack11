const knex = require('knex');
const databaseConfiguration = require('../../knexfile');
const config = process.env.NODE_ENV === 'test' ? databaseConfiguration.test : databaseConfiguration.development;
const connection = knex(config);

module.exports = connection;