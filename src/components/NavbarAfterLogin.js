import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../image/logo_posyandu.png'; // Pastikan path file benar

const NavbarAfterLogin = () => {
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
        <NavLink
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
            src={logo}
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
        </NavLink>
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
              <NavLink
                className="nav-link"
                to="/balita"
                activeClassName="active"
                style={{ color: '#555', fontWeight: '500' }}
              >
                Balita
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/lansia"
                activeClassName="active"
                style={{ color: '#555', fontWeight: '500' }}
              >
                Lansia
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/kader"
                activeClassName="active"
                style={{ color: '#555', fontWeight: '500' }}
              >
                Kader Page
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: '#555', fontWeight: '500' }}
              >
                Profil
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/profil/petugas">
                    Petugas
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/profil/kader">
                    Kader
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/profil/admin">
                    Admin
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAfterLogin;
