// PetugasPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PetugasPage = () => {
  const [dataPetugas, setDataPetugas] = useState([]);

  useEffect(() => {
    // Mengambil data petugas dari API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/petugas');
        setDataPetugas(response.data);
      } catch (error) {
        console.error("Error fetching petugas data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data Petugas</h2>
      {dataPetugas.length > 0 ? (
        <ul>
          {dataPetugas.map((petugas) => (
            <li key={petugas.id}>{petugas.nama}</li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default PetugasPage;
