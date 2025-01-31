import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api'; // Import fungsi dari service

const Read = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers(); // Panggil fungsi getUsers
        setUsers(data);
      } catch (error) {
        console.error('Gagal mengambil data:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Daftar Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} tahun
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Read;
