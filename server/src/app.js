const express = require('express');
const cors = require('cors');
const entityRouter = require('./routers/api/entities');
const errorHandler = require('./handlerError/request');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', entityRouter);
/** app.use(generalRouterLike404); */
app.use(errorHandler);

module.exports = app;