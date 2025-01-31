const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');  // Import jsonwebtoken
const router = express.Router();
const db = require('../config/db'); // Koneksi ke database
const { getProfil, createProfil } = require('../controllers/profil_controllers');

// Register route
router.post('/register', async (req, res) => {
  const { nama, jenisKelamin, alamat, noHp, email, role, tanggalLahir, username, password, jabatan, spesialisasi } = req.body;

  try {
    const query = `
      INSERT INTO users (nama, jenis_kelamin, alamat, no_hp, email, role, username, password) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(
      query,
      [nama, jenisKelamin, alamat, noHp, email, role, username, password],
      (err, result) => {
        if (err) {
          console.error('Error inserting user:', err);
          return res.status(500).send('Error registering user');
        }

        const userId = result.insertId; 

        if (role === 'kader') {
          const queryKader = `
            INSERT INTO kader (user_id, nama, tanggal_lahir, alamat, no_hp, jabatan, status) 
            VALUES (?, ?, ?, ?, ?, ?, 'aktif')
          `;
          db.query(queryKader, [userId, nama, tanggalLahir, alamat, noHp, jabatan], (err) => {
            if (err) {
              console.error('Error inserting kader:', err);
              return res.status(500).send('Error registering kader');
            }
            return res.status(201).send('Kader registered successfully. Please complete additional data.');
          });
        } else if (role === 'petugas_puskesmas') {
          const queryPetugas = `
            INSERT INTO petugas_puskesmas (user_id, nama, tanggal_lahir, alamat, jabatan, spesialisasi, status) 
            VALUES (?, ?, ?, ?, ?, ?, 'aktif')
          `;
          db.query(queryPetugas, [userId, nama, tanggalLahir, alamat, jabatan, spesialisasi], (err) => {
            if (err) {
              console.error('Error inserting petugas puskesmas:', err);
              return res.status(500).send('Error registering petugas puskesmas');
            }
            return res.status(201).send('Petugas Puskesmas registered successfully. Please complete additional data.');
          });
        } else {
          return res.status(201).send('User registered successfully');
        }
      }
    );
  } catch (error) {
    console.error('Error in registration:', error);
    return res.status(500).send('Internal server error');
  }
});

// Login route
router.post('/login', (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], async (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).send('User not found');

    const user = results[0];
    if(password!=user.password) {
      return res.status(401).send('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id, role: user.role }, 'secret_key', { expiresIn: '1h' });

    res.status(200).json({ token });
  });
});

// Route untuk mengambil semua data profil
router.get('/profil', getProfil);

// Route untuk menambahkan data profil
router.post('/profil', createProfil);

module.exports = router;
