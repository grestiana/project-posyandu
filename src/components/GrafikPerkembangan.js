// src/components/GrafikPerkembangan.js
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Mendaftarkan chart.js untuk digunakan di proyek React
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Perkembangan Berat Badan',
      data: [12, 15, 18, 21, 24, 27],
      borderColor: 'rgba(75, 192, 192, 1)',
      tension: 0.1,
    },
  ],
};

const GrafikPerkembangan = () => (
  <div>
    <h2>Grafik Perkembangan Anak</h2>
    <Line data={data} />
  </div>
);

export default GrafikPerkembangan;
