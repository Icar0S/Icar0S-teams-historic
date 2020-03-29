const express = require('express');

const TimesControllers = require('./controllers/TimesControllers');
const playsControllers = require('./controllers/playsControllers');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/times', TimesControllers.index);
routes.post('/times', TimesControllers.create);

routes.get('/profile', ProfileController.index);

routes.get('/plays', playsControllers.index);
routes.post('/plays', playsControllers.create);
routes.delete('/plays/:id', playsControllers.delete);

module.exports = routes;


//return response.send('HELLO World');
//const params = request.query;
//const params = request.params;

/***
 *  
 */


 /***
  * 
  */