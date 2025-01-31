// routes/newsRoutes.js
const express = require('express');
const db = require('../config/db');

const router = express.Router();

// Get News
router.get('/', (req, res) => {
  const query = 'SELECT * FROM news';
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
  });
});

module.exports = router;