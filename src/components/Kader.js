import React, { useState } from "react";

const Kader = () => {
  const [elderlyData, setElderlyData] = useState([
    {
      nik: "123456789",
      name: "Bambang",
      dob: "1963-01-01",
      age: 60,
      gender: "Laki-laki",
      address: "Jl. Mawar No. 10",
      bb: 65,
      tb: 165,
      headCircumference: 58,
      waistCircumference: 90,
      armCircumference: 30,
      bloodPressure: "120/80",
    },
  ]);

  const [childData, setChildData] = useState([
    {
      nik: "987654321",
      name: "Dewi",
      dob: "2020-05-01",
      age: 3,
      gender: "Perempuan",
      address: "Jl. Melati No. 5",
      bb: 12,
      tb: 90,
      headCircumference: 48,
      waistCircumference: 45,
      armCircumference: 18,
      motherName: "Siti",
    },
  ]);

  const [formData, setFormData] = useState({
    nik: "",
    name: "",
    dob: "",
    age: "",
    gender: "",
    address: "",
    bb: "",
    tb: "",
    headCircumference: "",
    waistCircumference: "",
    armCircumference: "",
    bloodPressure: "",
    motherName: "",
  });

  const [editIndex, setEditIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("elderly");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveData = () => {
    const dataToUpdate = activeTab === "elderly" ? elderlyData : childData;
    const updatedData = [...dataToUpdate];

    if (editIndex !== null) {
      // Update data if editIndex is not null
      updatedData[editIndex] = { ...formData };
    } else {
      // Add new data if editIndex is null
      updatedData.push({ ...formData });
    }

    // Save data to the appropriate state (elderlyData or childData)
    if (activeTab === "elderly") {
      setElderlyData(updatedData);
    } else {
      setChildData(updatedData);
    }

    resetForm(); // Reset the form after saving
  };

  const handleEdit = (index, type) => {
    setActiveTab(type);
    const dataToEdit = type === "elderly" ? elderlyData[index] : childData[index];
    setFormData({ ...dataToEdit });
    setEditIndex(index);
  };

  const handleDelete = (index, type) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      if (type === "elderly") {
        setElderlyData(elderlyData.filter((_, i) => i !== index));
      } else {
        setChildData(childData.filter((_, i) => i !== index));
      }
    }
  };

  const resetForm = () => {
    setFormData({
      nik: "",
      name: "",
      dob: "",
      age: "",
      gender: "",
      address: "",
      bb: "",
      tb: "",
      headCircumference: "",
      waistCircumference: "",
      armCircumference: "",
      bloodPressure: "",
      motherName: "",
    });
    setEditIndex(null); // Reset editIndex
  };

  return (
    <div className="container mt-5">
      <h2>Halaman Kader</h2>

      <div className="mb-3">
        <button
          className={`btn ${activeTab === "elderly" ? "btn-primary" : "btn-outline-primary"} me-2`}
          onClick={() => {
            setActiveTab("elderly");
            resetForm();
          }}
        >
          Lansia
        </button>
        <button
          className={`btn ${activeTab === "child" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => {
            setActiveTab("child");
            resetForm();
          }}
        >
          Balita
        </button>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>NIK</th>
            <th>Nama</th>
            <th>TTL</th>
            <th>Umur</th>
            <th>Jenis Kelamin</th>
            <th>Alamat</th>
            <th>BB</th>
            <th>TB</th>
            {activeTab === "elderly" && (
              <>
                <th>Lingkar Kepala</th>
                <th>Lingkar Perut</th>
                <th>Lingkar Lengan</th>
                <th>Tekanan Darah</th>
              </>
            )}
            {activeTab === "child" && (
              <>
                <th>Lingkar Kepala</th>
                <th>Lingkar Perut</th>
                <th>Lingkar Lengan</th>
                <th>Nama Ibu</th>
              </>
            )}
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {(activeTab === "elderly" ? elderlyData : childData).map((item, index) => (
            <tr key={index}>
              <td>{item.nik}</td>
              <td>{item.name}</td>
              <td>{item.dob}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.address}</td>
              <td>{item.bb}</td>
              <td>{item.tb}</td>
              {activeTab === "elderly" && (
                <>
                  <td>{item.headCircumference}</td>
                  <td>{item.waistCircumference}</td>
                  <td>{item.armCircumference}</td>
                  <td>{item.bloodPressure}</td>
                </>
              )}
              {activeTab === "child" && (
                <>
                  <td>{item.headCircumference}</td>
                  <td>{item.waistCircumference}</td>
                  <td>{item.armCircumference}</td>
                  <td>{item.motherName}</td>
                </>
              )}
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(index, activeTab)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(index, activeTab)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveData();
        }}
        className="mt-4"
      >
        <h4>{editIndex !== null ? "Edit Data" : "Tambah Data"} {activeTab === "elderly" ? "Lansia" : "Balita"}</h4>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="NIK"
          name="nik"
          value={formData.nik}
          onChange={handleFormChange}
          required
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Nama"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          required
        />
        <input
          type="date"
          className="form-control mb-2"
          name="dob"
          value={formData.dob}
          onChange={handleFormChange}
          required
        />
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Umur"
          name="age"
          value={formData.age}
          onChange={handleFormChange}
          required
        />
        <select
          className="form-control mb-2"
          name="gender"
          value={formData.gender}
          onChange={handleFormChange}
          required
        >
          <option value="">Pilih Jenis Kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Alamat"
          name="address"
          value={formData.address}
          onChange={handleFormChange}
          required
        />
        <input
          type="number"
          className="form-control mb-2"
          placeholder="BB (kg)"
          name="bb"
          value={formData.bb}
          onChange={handleFormChange}
          required
        />
        <input
          type="number"
          className="form-control mb-2"
          placeholder="TB (cm)"
          name="tb"
          value={formData.tb}
          onChange={handleFormChange}
          required
        />
        {activeTab === "elderly" && (
          <>
            <input
              type="number"
              className="form-control mb-2"
              placeholder="Lingkar Kepala (cm)"
              name="headCircumference"
              value={formData.headCircumference}
              onChange={handleFormChange}
              required
            />
            <input
              type="number"
              className="form-control mb-2"
              placeholder="Lingkar Perut (cm)"
              name="waistCircumference"
              value={formData.waistCircumference}
              onChange={handleFormChange}
            />
            <input
              type="number"
              className="form-control mb-2"
              placeholder="Lingkar Lengan (cm)"
              name="armCircumference"
              value={formData.armCircumference}
              onChange={handleFormChange}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Tekanan Darah"
              name="bloodPressure"
              value={formData.bloodPressure}
              onChange={handleFormChange}
            />
          </>
        )}
        {activeTab === "child" && (
          <>
            <input
              type="number"
              className="form-control mb-2"
              placeholder="Lingkar Kepala (cm)"
              name="headCircumference"
              value={formData.headCircumference}
              onChange={handleFormChange}
              required
            />
            <input
              type="number"
              className="form-control mb-2"
              placeholder="Lingkar Perut (cm)"
              name="waistCircumference"
              value={formData.waistCircumference}
              onChange={handleFormChange}
            />
            <input
              type="number"
              className="form-control mb-2"
              placeholder="Lingkar Lengan (cm)"
              name="armCircumference"
              value={formData.armCircumference}
              onChange={handleFormChange}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Nama Ibu"
              name="motherName"
              value={formData.motherName}
              onChange={handleFormChange}
              required
            />
          </>
        )}
        <button className="btn btn-success">
          {editIndex !== null ? "Update Data" : "Tambah Data"}
        </button>
      </form>
    </div>
  );
};

export default Kader;
