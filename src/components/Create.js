import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../services/api'; // Import fungsi dari service

const Create = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser({ name, age }); // Panggil fungsi addUser
      alert('User berhasil ditambahkan!');
      setName('');
      setAge('');
      navigate('/'); // Arahkan ke halaman utama setelah menambahkan
    } catch (error) {
      console.error('Gagal menambahkan user:', error);
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
