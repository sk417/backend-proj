const { Pool } = require("pg");
require("dotenv").config({path: './backend-proj/.env'});

console.log(process.env.DATABASE_URL);

const client = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false
});



module.exports = client;