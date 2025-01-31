const db = require('../config/db.js');

// Fungsi untuk mengambil data profil
const getProfil = (req, res) => {
  const sql = 'SELECT * FROM profil'; // Ganti dengan tabel yang sesuai di database Anda

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Gagal mengambil data profil:', err.message);
      res.status(500).json({ message: 'Gagal mengambil data profil' });
    } else {
      res.status(200).json(results);
    }
  });
};

// Fungsi untuk menambahkan data profil
const createProfil = (req, res) => {
  const { nama, email, peran } = req.body;
  const sql = 'INSERT INTO profil (nama, email, peran) VALUES (?, ?, ?)';
  
  db.query(sql, [nama, email, peran], (err, results) => {
    if (err) {
      console.error('Gagal menambahkan data profil:', err.message);
      res.status(500).json({ message: 'Gagal menambahkan data profil' });
    } else {
      res.status(201).json({ message: 'Data profil berhasil ditambahkan', id: results.insertId });
    }
  });
};

module.exports = {
  getProfil,
  createProfil
};
