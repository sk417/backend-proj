const { Pool, Client } = require("pg");
require("dotenv").config();


const client = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false
});



module.exports = client;