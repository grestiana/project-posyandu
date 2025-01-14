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
      setToken(response.data.token);
      navigate('/');
      alert('Logged in successfully!');
    } catch (error) {
      console.error(error);
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Login</h2>
      <div className="form-group">
        <input className="form-control mb-3" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="form-control mb-3" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="btn btn-success w-100" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
