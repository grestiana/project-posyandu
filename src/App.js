import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  const [token, setToken] = useState(null);  // Define the state to store the token

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/login" 
          element={<Login setToken={setToken} />}  // Pass setToken to Login component
        />
        {token}
      </Routes>
    </Router>
  );
};

export default App;
