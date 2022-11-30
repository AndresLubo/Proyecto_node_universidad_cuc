const express = require('express');
const app = express();

//? local imports
const config = require('./config.env/config.js');
const port = config.app.port;
const { RouterApi } = require('./router/router.js');

app.use(express.json());


RouterApi(app)

app.listen(port, () => console.log(`App running in port ${port}`));
