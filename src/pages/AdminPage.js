// AdminPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [dataAdmin, setDataAdmin] = useState([]);

  useEffect(() => {
    // Mengambil data admin dari API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin');
        setDataAdmin(response.data);
      } catch (error) {
        console.error("Error fetching admin data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data Admin</h2>
      {dataAdmin.length > 0 ? (
        <ul>
          {dataAdmin.map((admin) => (
            <li key={admin.id}>{admin.nama}</li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default AdminPage;
