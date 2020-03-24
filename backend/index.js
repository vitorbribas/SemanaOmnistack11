const express = require('express');

const app = express();
app.use(express.json());

app.get('/users', (request, response) => {
  return response.json({ 
    evento: 'Semana Omnistack',
    aluno: 'Vítor Ribas'
  });
});

app.listen(3333);