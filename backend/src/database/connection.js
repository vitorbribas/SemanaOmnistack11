const knex = require('knex');
const databaseConfiguration = require('../../knexfile');
const connection = knex(databaseConfiguration.development);

module.exports = connection;