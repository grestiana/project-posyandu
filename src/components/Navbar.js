import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: '#fff',
        borderBottom: '1px solid #ddd',
        padding: '1rem',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          style={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            color: '#007bff',
            textDecoration: 'none',
          }}
        >
          <img
            src="./logo_posyandu.png" // Ganti URL ini dengan URL logo Anda
            alt="Logo Posyandu"
            style={{
              width: '40px',
              height: '40px',
              marginRight: '10px',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          />
          POSYANDU
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/balita"
                style={{ color: '#555', fontWeight: '500' }}
              >
                Balita
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/lansia"
                style={{ color: '#555', fontWeight: '500' }}
              >
                Lansia
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/kader"
                style={{ color: '#555', fontWeight: '500' }}
              >
                Kader Page
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/login"
                style={{ color: '#007bff', fontWeight: '500' }}
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/register"
                style={{ color: '#007bff', fontWeight: '500' }}
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
