const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors({
    //origin: "site.com.br"
}));
app.use(express.json());
app.use(routes); //importate ser abaixo do .json

app.listen(3333);

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






