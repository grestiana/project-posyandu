const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Koneksi database

// Endpoint untuk mengambil semua data kader
router.get('/', (req, res) => {
  const sql = "SELECT * FROM kader";
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Gagal mengambil data kader." });
    }
    res.json(result);
  });
});

module.exports = router;
