import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // Fungsi logout untuk menghapus token dan mengarahkan ke halaman login
  const handleLogout = () => {
    localStorage.removeItem('token'); // Menghapus token dari localStorage
    navigate('/login'); // Redirect ke halaman login
  };

  // Cek apakah token ada di localStorage untuk menentukan tampilan menu
  const token = localStorage.getItem('token');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
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
            {!token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                <button className="nav-link btn" onClick={handleLogout}>
                  Logout
                </button>
              </li>
              </>
            ) : ""}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
