const express = require('express');
const bodyParser = require('body-parser');
const router = require('./Controller/Router/Route');
const cors = require('cors')
require("dotenv").config();   //.env is in root folder here

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());

app.use('/api/users', router);


app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`);
});