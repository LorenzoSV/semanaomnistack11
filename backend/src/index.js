
const express = require('express');
const cors = require("cors");
const routes = require('./routes.js');
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**Programas Baixados: Insomnia - simula browser
 * Nodemon não precisa de dar "node index.js"
 * knex.js n
 */
/**
 * Rota / Recursos
 */

/**
 * GET: BUscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT:  Alterar uma informação no back-end
 * DELETE: deletar uma informação do back-end
 */

/**
 * Tipos de parâmetros
 * 
 * Query: Parâmetros enviados na rota após "?" (Filtros, paginação)
 * Routes Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alteral recursos
 */

 /**
  * SQL: MySQL, SQLite, POstgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CoucheDB, etc
  */
