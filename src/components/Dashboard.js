import React, { useState } from "react";
import Kader from "./Kader"; // Import komponen Kader
import Balita from "./balita"; // Import komponen Balita

const Dashboard = () => {
  const [elderlyData, setElderlyData] = useState([]); // Data Lansia
  const [childrenData, setChildrenData] = useState([]); // Data Balita

  return (
    <div>
      <h1 className="text-center mt-4">Dashboard Kader</h1>
      <div className="container mt-4">
        <div className="row">
          {/* Kolom Kiri: Halaman Kader */}
          <div className="col-md-6">
            <Kader
              elderlyData={elderlyData}
              setElderlyData={setElderlyData}
              childrenData={childrenData}
              setChildrenData={setChildrenData}
            />
          </div>
          {/* Kolom Kanan: Halaman Balita */}
          <div className="col-md-6">
            <Balita childrenData={childrenData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
