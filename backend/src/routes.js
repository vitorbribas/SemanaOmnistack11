const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const OngProfileController = require('./controllers/OngProfileController');
const SessionController = require('./controllers/SessionController');

routes = express.Router();

routes.get('/ongs',  OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents',       IncidentController.create);
routes.get('/incidents',        IncidentController.index);
routes.delete('/incidents/:id', IncidentController.destroy);

routes.get('/profile/incidents', OngProfileController.index);

routes.post('/login', SessionController.create);

module.exports = routes;
