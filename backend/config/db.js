const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'posyandunew',
});

db.connect((err) => {
  if (err) {
    console.error('Gagal terhubung ke database:', err.message);
    throw err;
  }
  console.log('Berhasil terhubung ke database MySQL');
});

module.exports = db;