const express = require('express');
const bodyParser = require('body-parser');
const router = require('./Controller/Router/Route');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/users', router);

app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`);
});