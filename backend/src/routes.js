const express = require('express');

routes = express.Router();

routes.get('/users', (request, response) => {
  return response.json({ 
    evento: 'Semana Omnistack',
    aluno: 'Vítor Ribas'
  });
});

module.exports = routes;
