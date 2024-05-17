const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const Router = require('./routes/routes');
require('./lib/database-manager').connect();

app.use(cors());
app.use('/', Router);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))










