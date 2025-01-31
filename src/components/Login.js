import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { username, password });

      const token = response.data.token;
      if (token) {
        localStorage.setItem('token', token); // Simpan token ke Local Storage
        setToken(token); // Update state token di App.js
        navigate('/'); // Redirect ke halaman home
        alert('Logged in successfully!');
      } else {
        alert('Login failed, no token received.');
      }
    } catch (error) {
      console.error(error);
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Login</h2>
      <div className="form-group">
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-success w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
