const express = require('express');
const db = require('./config/db'); // Import koneksi database dari db.js
const app = express();
const port = 5000;

app.use(express.json());

// Endpoint untuk mendapatkan semua data users
app.get('/api/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Gagal mengambil data:', err.message);
      return res.status(500).json({ error: 'Gagal mengambil data' });
    }
    res.json(results);
  });
});

// Endpoint untuk menambahkan user baru
app.post('/api/users', (req, res) => {
  const { nama, jenis_kelamin } = req.body;
  const sql = 'INSERT INTO users (nama, jenis_kelamin) VALUES (?, ?)';
  db.query(sql, [nama, jenis_kelamin], (err, result) => {
    if (err) {
      console.error('Gagal menambahkan user:', err.message);
      return res.status(500).json({ error: 'Gagal menambahkan user' });
    }
    res.status(201).json({ message: 'User berhasil ditambahkan', id: result.insertId });
  });
});

// Endpoint untuk mengupdate user
app.put('/api/users/:id', (req, res) => {
  const { name, age } = req.body;
  const userId = req.params.id;
  const sql = 'UPDATE users SET name = ?, age = ? WHERE id = ?';
  db.query(sql, [name, age, userId], (err, result) => {
    if (err) {
      console.error('Gagal mengupdate user:', err.message);
      return res.status(500).json({ error: 'Gagal mengupdate user' });
    }
    res.json({ message: 'User berhasil diupdate' });
  });
});

// Endpoint untuk menghapus user
app.delete('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const sql = 'DELETE FROM users WHERE id = ?';
  db.query(sql, [userId], (err, result) => {
    if (err) {
      console.error('Gagal menghapus user:', err.message);
      return res.status(500).json({ error: 'Gagal menghapus user' });
    }
    res.json({ message: 'User berhasil dihapus' });
  });
});

app.post('/api/profile', (req, res) => {
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
});

app.put('/api/profile/:id', async (req, res, next) => {
  const profileId = req.params.id;
  const { nama, email, peran } = req.body;

  if (!nama || !email || !peran) {
    return res.status(400).json({ error: 'Nama, email, dan peran wajib diisi' });
  }

  try {
    const [result] = await db.promise().query(
      'UPDATE profil SET nama = ?, email = ?, peran = ? WHERE id = ?',
      [nama, email, peran, profileId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Profil tidak ditemukan' });
    }

    res.json({ message: 'Profil berhasil diperbarui' });
  } catch (error) {
    next(error);
  }
});


// Endpoint untuk menghapus profil berdasarkan ID
app.delete('/api/profile/:id', async (req, res, next) => {
  const profileId = req.params.id;
  
  try {
    const [result] = await db.promise().query('DELETE FROM profil WHERE id = ?', [profileId]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Profil tidak ditemukan' });
    }

    res.json({ message: 'Profil berhasil dihapus' });
  } catch (error) {
    next(error);
  }
});




// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});