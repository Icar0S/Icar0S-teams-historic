const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');


const TimesControllers = require('./controllers/TimesControllers');
const playsControllers = require('./controllers/playsControllers');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/times', TimesControllers.index);

routes.post('/times', celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome:  Joi.string().required(),
        site: Joi.string().required(),
        email: Joi.string().required().email(),
        contato: Joi.string().required().min(10).max(11),
        cidade: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), TimesControllers.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()    
}), ProfileController.index);

routes.get('/plays', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page:  Joi.number().required()
    })
}), playsControllers.index);


routes.post('/plays', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()},{ 
    [Segments.BODY]: Joi.object().keys({
        confronto:  Joi.string().required(),
        campeonato: Joi.string().required(),
        descricao: Joi.string().required().email(),
        gols_casa: Joi.string().required().max(2),
        gols_fora: Joi.string().required().max(2),
        estadio: Joi.string().required(),
        publico: Joi.string().required().max(6),
        renda: Joi.string().required().max(10)
    })
}),    playsControllers.create);


routes.delete('/plays/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id:  Joi.number().required()
    })
}), playsControllers.delete);

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