import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [nama, setNama] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [alamat, setAlamat] = useState('');
  const [noHp, setNoHp] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [status, setStatus] = useState('aktif');
  const [spesialisasi, setSpesialisasi] = useState('');
  const [idKader, setIdKader] = useState('');
  const [idPetugasPuskesmas, setIdPetugasPuskesmas] = useState('');

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const data = {
        nama,
        jenisKelamin,
        alamat,
        noHp,
        email,
        role,
        username,
        password,
        tanggalLahir,
        jabatan,
        status,
        spesialisasi,
        idKader,
        idPetugasPuskesmas,
      };

      // Kirim data ke backend
      await axios.post('http://localhost:5000/api/users/register', data);
      alert('Registered successfully!');
      navigate('/login'); // Arahkan ke halaman login setelah berhasil registrasi
    } catch (error) {
      console.error(error);
      alert('Error during registration!');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Register</h2>
      <div className="form-group">
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <select
          className="form-control mb-3"
          value={jenisKelamin}
          onChange={(e) => setJenisKelamin(e.target.value)}
        >
          <option value="">Pilih Jenis Kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Alamat"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="text"
          placeholder="No. HP"
          value={noHp}
          onChange={(e) => setNoHp(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select
          className="form-control mb-3"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Pilih Role</option>
          <option value="kader">Kader</option>
          <option value="petugas_puskesmas">Petugas Puskesmas</option>
          <option value="warga">Warga</option>
        </select>

        {role === 'kader' && (
          <>
            <input
              className="form-control mb-3"
              type="text"
              placeholder="ID Kader"
              value={idKader}
              onChange={(e) => setIdKader(e.target.value)}
            />
            <input
              className="form-control mb-3"
              type="date"
              placeholder="Tanggal Lahir"
              value={tanggalLahir}
              onChange={(e) => setTanggalLahir(e.target.value)}
            />
            <select
              className="form-control mb-3"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="aktif">Aktif</option>
              <option value="non-aktif">Non-Aktif</option>
            </select>
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Jabatan"
              value={jabatan}
              onChange={(e) => setJabatan(e.target.value)}
            />
          </>
        )}

        {role === 'petugas_puskesmas' && (
          <>
            <input
              className="form-control mb-3"
              type="text"
              placeholder="ID Petugas Puskesmas"
              value={idPetugasPuskesmas}
              onChange={(e) => setIdPetugasPuskesmas(e.target.value)}
            />
            <input
              className="form-control mb-3"
              type="date"
              placeholder="Tanggal Lahir"
              value={tanggalLahir}
              onChange={(e) => setTanggalLahir(e.target.value)}
            />
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Jabatan"
              value={jabatan}
              onChange={(e) => setJabatan(e.target.value)}
            />
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Spesialisasi"
              value={spesialisasi}
              onChange={(e) => setSpesialisasi(e.target.value)}
            />
            <select
              className="form-control mb-3"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="aktif">Aktif</option>
              <option value="non-aktif">Non-Aktif</option>
            </select>
          </>
        )}

        <input
          className="form-control mb-3"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary w-100" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
