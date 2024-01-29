const express = require('express');
const bodyParser = require('body-parser');
const router = require('./Controller/Router/Route');
 require("dotenv").config({path: './backend-proj/.env'});

const app = express();
const PORT = process.env.PORT || 3000;

console.log(process.env.DATABASE_URL);

app.use(bodyParser.json());

app.use('/api/users', router);

app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`);
});