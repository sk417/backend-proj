const express = require('express');
const bodyParser = require('body-parser');
const router = require('./Controller/Router/Route');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

console.log(process.env.PORT);

app.use(bodyParser.json());

app.use('/api', router);


app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`);
});