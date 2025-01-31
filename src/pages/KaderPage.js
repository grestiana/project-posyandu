// KaderPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const KaderPage = () => {
  const [dataKader, setDataKader] = useState([]);

  useEffect(() => {
    // Mengambil data kader dari API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/kader');
        setDataKader(response.data);
      } catch (error) {
        console.error("Error fetching kader data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data Kader</h2>
      {dataKader.length > 0 ? (
        <ul>
          {dataKader.map((kader) => (
            <li key={kader.id}>{kader.nama}</li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default KaderPage;
