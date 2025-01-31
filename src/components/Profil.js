import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profil = () => {
  const navigate = useNavigate();

  const [profil, setProfil] = useState({
    id: '',
    nama: '',
    email: '',
    peran: ''
  });

  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    id: '',
    nama: '',
    email: '',
    peran: ''
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/profile');
        if (response.data) {
          setProfil(response.data);
          setEditData(response.data);
        }
      } catch (error) {
        console.error('Gagal mengambil data profil:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/api/profile/${profil.id}`, editData);
      setProfil(editData);
      setIsEditing(false);
      alert('Profil berhasil diperbarui!');
    } catch (error) {
      console.error('Gagal menyimpan data profil:', error);
      alert('Terjadi kesalahan saat menyimpan profil.');
    }
  };

  const handleCancel = () => {
    setEditData(profil);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus profil ini?')) {
      try {
        await axios.delete(`http://localhost:5000/api/profile/${profil.id}`);
        alert('Profil berhasil dihapus!');
        navigate('/home');
      } catch (error) {
        console.error('Gagal menghapus profil:', error);
        alert('Terjadi kesalahan saat menghapus profil.');
      }
    }
  };

  if (loading) {
    return <p>Memuat data profil...</p>;
  }

  if (!profil?.nama) {
    return <p>Profil tidak ditemukan.</p>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1.5rem', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ marginBottom: '1rem', color: '#007bff' }}>Profil Pengguna</h2>
      {isEditing ? (
        <div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Nama:</label>
            <input
              type="text"
              value={editData.nama}
              onChange={(e) => setEditData({ ...editData, nama: e.target.value })}
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Email:</label>
            <input
              type="email"
              value={editData.email}
              onChange={(e) => setEditData({ ...editData, email: e.target.value })}
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>

          <button onClick={handleSave} style={{ backgroundColor: '#28a745', color: '#fff', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer', marginRight: '1rem' }}>Simpan</button>
          <button onClick={handleCancel} style={{ backgroundColor: '#dc3545', color: '#fff', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer' }}>Batal</button>
        </div>
      ) : (
        <div>
          <p><strong>Nama:</strong> {profil?.nama || 'Tidak tersedia'}</p>
          <p><strong>Email:</strong> {profil?.email || 'Tidak tersedia'}</p>
          <p><strong>Peran:</strong> {profil?.peran || 'Tidak tersedia'}</p>
          <button onClick={() => setIsEditing(true)} style={{ backgroundColor: '#007bff', color: '#fff', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer', marginRight: '1rem' }}>Edit</button>
          <button onClick={handleDelete} style={{ backgroundColor: '#dc3545', color: '#fff', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer' }}>Hapus Profil</button>
        </div>
      )}
    </div>
  );
};

export default Profil;
