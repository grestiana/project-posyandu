import React from "react";
import SampleImage1 from "../image/gambar1.jpg"; // Ganti dengan path gambar yang sesuai
import SampleImage2 from "../image/gambar2.jpg";
import SampleImage3 from "../image/posyandu3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div>

      <div className="container mt-5">
        {/* Header (Tetap di atas) */}
        <div
          className="header"
          style={{
            backgroundColor: "#fff",
            padding: "1rem 0",
          }}
        >
          <h1 className="text-center">Selamat Datang di POSYANDU</h1>
          <p className="text-center mt-3">
            Website ini hadir untuk mendukung layanan posyandu yang lebih efektif dan terorganisir dalam menjaga kesehatan ibu, balita, dan masyarakat.
          </p>
        </div>

        {/* Konten Scrollable */}
        <div
          className="scroll-container no-scrollbar"
          style={{
            overflowY: "auto",
            maxHeight: "80vh",
            padding: "0 1rem",
            marginTop: "1rem",
            scrollbarWidth: "none",
          }}
        >
          {/* Section Misi */}
          <div className="mb-5" style={{ marginBottom: "50px" }}>
            {/* Carousel Gambar */}
            <Carousel className="mt-4">
              <Carousel.Item>
                <img
                  className="d-block"
                  src={SampleImage1}
                  alt="Gambar 1"
                  style={{ maxWidth: "800px", maxHeight: "500px", margin: "auto", objectFit: "cover" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={SampleImage2}
                  alt="Gambar 2"
                  style={{ maxWidth: "800px", maxHeight: "500px", margin: "auto", objectFit: "cover" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={SampleImage3}
                  alt="Gambar 3"
                  style={{ maxWidth: "800px", maxHeight: "500px", margin: "auto", objectFit: "cover" }}
                />
              </Carousel.Item>
            </Carousel>

            <h2 className="text-center mt-4">VISI DAN MISI</h2>

            <div className="row mt-4">
              <div className="col-md-6">
                <div
                  className="content-box"
                  style={{
                    backgroundColor: "#f8f9fa",
                    padding: "1rem",
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                >
                  <p>
                    <strong>Visi Posyandu:</strong> Mewujudkan masyarakat sehat, mandiri, dan sejahtera
                    melalui pelayanan kesehatan yang terintegrasi dan berkesinambungan.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="content-box"
                  style={{
                    backgroundColor: "#f8f9fa",
                    padding: "1rem",
                    borderRadius: "8px",
                  }}
                >
                  <p>
                    <strong>Misi Posyandu:</strong> Memberikan pelayanan kesehatan dasar yang berkualitas,
                    meningkatkan kesadaran masyarakat tentang pentingnya kesehatan,
                    mendukung pertumbuhan dan perkembangan anak maupun lansia,
                    serta memperkuat kemitraan dengan berbagai pihak untuk kesejahteraan bersama.
                  </p>

                </div>
              </div>
            </div>
          </div>

          {/* Section Jadwal */}
          <div className="mb-5" style={{ marginBottom: "100px" }} id="jadwal">
            <h2 className="text-center">JADWAL</h2>
            <div className="row mt-4 justify-content-center">
              <div className="col-md-8">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Tanggal</th>
                      <th>Kegiatan</th>
                      <th>Lokasi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>01 Januari 2025</td>
                      <td>Pemeriksaan Balita</td>
                      <td>Balai Desa A</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>01 Februari 2025</td>
                      <td>Imunisasi Balita</td>
                      <td>Balai Desa A</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>01 Maret 2025</td>
                      <td>Pemeriksaan Ibu Hamil</td>
                      <td>Balai Desa A</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>01 April 2025</td>
                      <td>Pemberian Vitamin A</td>
                      <td>Balai Desa A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Section Tentang Kami */}
          <div style={{ marginBottom: "50px", marginTop: "100px" }} id="tentang">
            <h2 className="text-center">TENTANG KAMI</h2>
            <div
              className="content-box mt-4"
              style={{
                backgroundColor: "#f8f9fa",
                padding: "1rem",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <p>
                Kami adalah platform digital yang bertujuan untuk meningkatkan
                layanan dan pencatatan posyandu agar lebih efisien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
