import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Fungsi untuk mengambil data users
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Gagal mengambil data:', error);
    throw error;
  }
};

// Fungsi untuk menambahkan user baru
export const addUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
  } catch (error) {
    console.error('Gagal menambahkan user:', error);
    throw error;
  }
};