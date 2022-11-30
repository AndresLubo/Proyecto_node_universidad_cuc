const express = require('express');
const app = express();

//? local imports
const config = require('./config.env/config.js');
const port = config.app.port;
const { RouterApi } = require('./router/router.js');

const { boomErrorHandler, errorHandler, logErrors, ormErrorHandler } = require('./middlewares/error.handler');

app.use(express.json());

RouterApi(app);

// app.use(logErrors);
app.use(ormErrorHandler)
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
