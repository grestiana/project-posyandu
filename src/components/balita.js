import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Balita = () => {
  const [childrenData] = useState([
    {
      nik: "987654321",
      name: "Dewi",
      dob: "2020-05-01",
      age: 3,
      gender: "Perempuan",
      motherName: "Siti",
      address: "Jl. Melati No. 5",
    },
    {
      nik: "123456789",
      name: "Ahmad",
      dob: "2020-01-01",
      age: 5,
      gender: "Laki-laki",
      motherName: "Sinta",
      address: "Jl. Mawar No. 10",
    },
    {
      nik: "987654321",
      name: "Aisyah",
      dob: "2019-02-15",
      age: 6,
      gender: "Perempuan",
      motherName: "Rina",
      address: "Jl. Melati No. 5",
    },
    {
      nik: "456123789",
      name: "Budi",
      dob: "2021-03-10",
      age: 4,
      gender: "Laki-laki",
      motherName: "Tina",
      address: "Jl. Kenanga No. 8",
    },
  ]);

  const growthData = {
    Dewi: [
      { weight: 12, height: 90, headCircumference: 46, abdomenCircumference: 52, armCircumference: 22 },
      { weight: 13, height: 91, headCircumference: 46, abdomenCircumference: 52, armCircumference: 22 },
    ],
    Ahmad: [
      { weight: 12, height: 90, headCircumference: 45, abdomenCircumference: 50, armCircumference: 20 },
      { weight: 14, height: 95, headCircumference: 46, abdomenCircumference: 52, armCircumference: 22 },
    ],
    Aisyah: [
      { weight: 13, height: 92, headCircumference: 44, abdomenCircumference: 49, armCircumference: 21 },
      { weight: 15, height: 98, headCircumference: 45, abdomenCircumference: 51, armCircumference: 23 },
    ],
    Budi: [
      { weight: 11, height: 88, headCircumference: 43, abdomenCircumference: 48, armCircumference: 19 },
      { weight: 13, height: 92, headCircumference: 44, abdomenCircumference: 50, armCircumference: 21 },
    ],
  };

  const [selectedChild, setSelectedChild] = useState(null);

  return (
    <div className="container mt-5 p-4 text-center" style={{ backgroundColor: "#f0f8ff", borderRadius: "15px", boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)" }}>
      <h2 className="text-center text-dark bg-gradient p-3 rounded" style={{ background: "linear-gradient(to right, #007bff, #00c6ff)" }}>Data Anak</h2>
      <div style={{ maxHeight: "400px", overflowY: "auto", borderRadius: "10px" }}>
        <table className="table table-hover table-bordered">
          <thead className="table-primary text-center">
            <tr>
              <th>NIK</th>
              <th>Nama</th>
              <th>TTL</th>
              <th>Umur</th>
              <th>Jenis Kelamin</th>
              <th>Nama Ibu</th>
              <th>Alamat</th>
            </tr>
          </thead>
          <tbody>
            {childrenData.map((child, index) => (
              <tr key={index} className="text-center" style={{ cursor: "pointer" }} onClick={() => setSelectedChild(child.name)}>
                <td>{child.nik}</td>
                <td>{child.name}</td>
                <td>{child.dob}</td>
                <td>{child.age} tahun</td>
                <td>{child.gender}</td>
                <td>{child.motherName}</td>
                <td>{child.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedChild && (
        <>
          <h2 className="text-center text-dark bg-gradient p-3 mt-4 rounded" style={{ background: "linear-gradient(to right, #00c6ff, #007bff)" }}>Data Perkembangan Anak</h2>
          <div style={{ maxHeight: "400px", overflowY: "auto", borderRadius: "10px" }}>
            <table className="table table-hover table-bordered">
              <thead className="table-info text-center">
                <tr>
                  <th>BB (kg)</th>
                  <th>TB (cm)</th>
                  <th>Lingkar Kepala (cm)</th>
                  <th>Lingkar Perut (cm)</th>
                  <th>Lingkar Lengan (cm)</th>
                </tr>
              </thead>
              <tbody>
                {growthData[selectedChild].map((growth, index) => (
                  <tr key={index} className="text-center">
                    <td>{growth.weight}</td>
                    <td>{growth.height}</td>
                    <td>{growth.headCircumference}</td>
                    <td>{growth.abdomenCircumference}</td>
                    <td>{growth.armCircumference}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-center text-dark bg-gradient p-3 mt-4 rounded" style={{ background: "linear-gradient(to right, #007bff, #00c6ff)" }}>Grafik Perkembangan Anak</h2>
          <p className="text-center text-primary fw-bold">Grafik untuk: {selectedChild}</p>
          <div style={{ width: "100%", height: "400px", borderRadius: "10px" }}>
            <Line data={{ labels: growthData[selectedChild].map((_, index) => `Bulan ${index + 1}`), datasets: [ { label: "Berat Badan (kg)", data: growthData[selectedChild].map(data => data.weight), borderColor: "#007bff", backgroundColor: "rgba(0, 123, 255, 0.5)" }, { label: "Tinggi Badan (cm)", data: growthData[selectedChild].map(data => data.height), borderColor: "#00c6ff", backgroundColor: "rgba(0, 198, 255, 0.5)" }, ] }} />
          </div>
        </>
      )}
    </div>
  );
};

export default Balita;
