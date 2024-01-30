import express from 'express';
import mysql from 'mysql2';
//const mysql = require('mysql');

// Create connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'testing-sean-pass1',
  database: 'inventorytracker'
});

const app = express();

// Route to get equipment data

app.get('/', (req, res) => {
  res.send("api is running");
})


// app.get('/equipment', (req, res) => {
//   pool.query('SELECT * FROM equipment', (error, results) => {
//     if (error) throw error;
//     res.json(results);
//   });
// });

// // Route to get players data
// app.get('/players', (req, res) => {
//   pool.query('SELECT * FROM players', (error, results) => {
//     if (error) throw error;
//     res.json(results);
//   });
// });

// // Route to get sports data
// app.get('/sports', (req, res) => {
//   pool.query('SELECT * FROM sports', (error, results) => {
//     if (error) throw error;
//     res.json(results);
//   });
// });

// // Route to get teams data
// app.get('/teams', (req, res) => {
//   pool.query('SELECT * FROM teams', (error, results) => {
//     if (error) throw error;
//     res.json(results);
//   });
// });

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
