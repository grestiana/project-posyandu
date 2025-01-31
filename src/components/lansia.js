import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
//import Navbar from './Navbar';  // Import the Navbar component

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Lansia = () => {
  const [elderlyData] = useState([
    {
      nik: "123456789",
      name: "Bambang",
      dob: "1963-01-01",
      age: 62,
      gender: "Laki-laki",
      address: "Jl. Mawar No. 10",
    },
    {
      nik: "987654321",
      name: "Retno",
      dob: "1959-02-15",
      age: 66,
      gender: "Perempuan",
      address: "Jl. Melati No. 5",
    },
    {
      nik: "456123789",
      name: "Tono",
      dob: "1961-03-10",
      age: 64,
      gender: "Laki-laki",
      address: "Jl. Kenanga No. 8",
    },
  ]);

  const growthData = {
    Bambang: [
      { weight: 65, height: 165, headCircumference: 58, abdomenCircumference: 90, armCircumference: 30, bloodPressure: "120/80" },
      { weight: 64, height: 165, headCircumference: 58, abdomenCircumference: 90, armCircumference: 30, bloodPressure: "125/75" },
    ],
    Retno: [
      { weight: 57, height: 155, headCircumference: 55, abdomenCircumference: 75, armCircumference: 26, bloodPressure: "110/68" },
      { weight: 57, height: 155, headCircumference: 55, abdomenCircumference: 75, armCircumference: 26, bloodPressure: "112/72" },
    ],
    Tono: [
      { weight: 63, height: 167, headCircumference: 57, abdomenCircumference: 87, armCircumference: 27, bloodPressure: "125/70" },
      { weight: 63, height: 167, headCircumference: 57, abdomenCircumference: 87, armCircumference: 27, bloodPressure: "118/70" },
    ],
  };

  const [selectedElderly, setSelectedElderly] = useState(null);

  return (
    <div>
      {/* <Navbar />  {/* Include Navbar here */}
      <div className="container mt-5 p-4 text-center" style={{ backgroundColor: "#f0f8ff", borderRadius: "15px", boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)" }}>
        <h2 className="text-center text-dark bg-gradient p-3 rounded" style={{ background: "linear-gradient(to right, #007bff, #00c6ff)" }}>Data Lansia</h2>
        <div style={{ maxHeight: "400px", overflowY: "auto", borderRadius: "10px" }}>
          <table className="table table-hover table-bordered">
            <thead className="table-primary text-center"> 
              <tr>
                <th>NIK</th>
                <th>Nama</th>
                <th>TTL</th>
                <th>Umur</th>
                <th>Jenis Kelamin</th>
                <th>Alamat</th>
              </tr>
            </thead>
            <tbody>
              {elderlyData.map((elderly, index) => (
                <tr key={index} className="text-center" style={{ cursor: "pointer" }} onClick={() => setSelectedElderly(elderly.name)}>
                  <td>{elderly.nik}</td>
                  <td>{elderly.name}</td>
                  <td>{elderly.dob}</td>
                  <td>{elderly.age} tahun</td>
                  <td>{elderly.gender}</td>
                  <td>{elderly.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedElderly && (
          <>
            <h2 className="text-center text-dark bg-gradient p-3 mt-4 rounded" style={{ background: "linear-gradient(to right, #00c6ff, #007bff)" }}>Data Perkembangan Lansia</h2>
            <div style={{ maxHeight: "400px", overflowY: "auto", borderRadius: "10px" }}>
              <table className="table table-hover table-bordered">
                <thead className="table-info text-center">
                  <tr>
                    <th>BB (kg)</th>
                    <th>TB (cm)</th>
                    <th>Lingkar Kepala (cm)</th>
                    <th>Lingkar Perut (cm)</th>
                    <th>Lingkar Lengan (cm)</th>
                    <th>Tekanan Darah</th>
                  </tr>
                </thead>
                <tbody>
                  {growthData[selectedElderly].map((growth, index) => (
                    <tr key={index} className="text-center">
                      <td>{growth.weight}</td>
                      <td>{growth.height}</td>
                      <td>{growth.headCircumference}</td>
                      <td>{growth.abdomenCircumference}</td>
                      <td>{growth.armCircumference}</td>
                      <td>{growth.bloodPressure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-center text-dark bg-gradient p-3 mt-4 rounded" style={{ background: "linear-gradient(to right, #007bff, #00c6ff)" }}>Grafik Perkembangan Lansia</h2>
            <div style={{ width: "100%", height: "400px", borderRadius: "10px" }}>
              <Line data={{
                labels: growthData[selectedElderly].map((_, index) => `Bulan ${index + 1}`),
                datasets: [
                  {
                    label: "Berat Badan (kg)",
                    data: growthData[selectedElderly].map((data) => data.weight),
                    borderColor: "#007bff",
                    backgroundColor: "rgba(0, 123, 255, 0.5)",
                  },
                  {
                    label: "Tinggi Badan (cm)",
                    data: growthData[selectedElderly].map((data) => data.height),
                    borderColor: "#00c6ff",
                    backgroundColor: "rgba(0, 198, 255, 0.5)",
                  },
                ],
              }} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Lansia;
