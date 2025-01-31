// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const newsRoutes = require('./routes/newsRoutes');
const petugasRoutes = require('./routes/petugasRoutes');
const db = require('./config/db');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/petugas', petugasRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});