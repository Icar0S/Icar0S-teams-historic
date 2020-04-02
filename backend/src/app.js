const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes); //importate ser abaixo do .json
app.use(errors());

module.exports = app;

/*
MEtodos HTTP:

*GET: Buscar info do back-end
*POST: Criar uma info no back-end
*PUT: Alterar uma info no back-end
*DELETE: Deletar info no back-end
*/ 


/*
* TIPOS DE PARAMETROS:

* Query Params: Parametros nomeados enviados na rota apos "?" (Filtros e Paginação)

* Route Params: Parametros utilizados para identificar recursos

* Request Body:

*/

/**
 * Driver: SELECT * FROM users
 * 
 * Query builder: table('users').select('*').where()
 * 
 */






