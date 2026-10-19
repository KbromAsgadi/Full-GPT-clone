const mysql = require("mysql2/promise");

// const pool = mysql.createPool({
//   host: process.env.DB_HOST || "localhost",
//   port: Number(process.env.DB_PORT) || 8889,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,

//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
});
module.exports = db;