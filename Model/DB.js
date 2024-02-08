const { Pool, Client } = require("pg");
// require("dotenv").config();


// const client = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: false
// });

const client = new Client({
  'host': 'localhost',
  'port': 5432,
  'database': 'jman_data',
  'user': 'postgres',
  'password': 'Sudheer@123',
})

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
    // Perform database operations here
  });
  // .catch(err => console.error('Error connecting to PostgreSQL:', err))
  // .finally(() => {
  //   // Close the connection when done
  //   // client.end();
  // });


module.exports = client;