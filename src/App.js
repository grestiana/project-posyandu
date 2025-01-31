import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Balita from './components/balita';
import Lansia from './components/lansia';
import GrafikPerkembangan from './components/GrafikPerkembangan';
import Kader from './components/Kader';
import Dashboard from './components/Dashboard';
import Profile from './components/Profil';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import KaderPage from './pages/KaderPage';
import PetugasPage from './pages/PetugasPage';
import AdminPage from './pages/AdminPage';


const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const handleTokenChange = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  return (
    <Router>
      {token && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setToken={handleTokenChange} />} />
        <Route path="/balita" element={<Balita />} />
        <Route path="/lansia" element={<Lansia />} />
        <Route path="/grafik" element={<GrafikPerkembangan />} />
        <Route path="/kader" element={<Kader />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/kader" element={<KaderPage />} />
        <Route path="/petugas" element={<PetugasPage />} />
        <Route path="/profil/admin" component={AdminPage} />
      </Routes>
    </Router>
  );
};

export default App;