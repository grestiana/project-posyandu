const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Koneksi database

// Endpoint untuk mengambil semua data petugas
router.get('/', (req, res) => {
  const sql = "SELECT * FROM petugas_puskesmas";
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Gagal mengambil data petugas." });
    }
    res.json(result);
  });
});

module.exports = router;
