import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    return logOut();
  };
  return (
    <div className="navbar-container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/my-orders" className="nav-link">
                  My Orders
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/manage-orders" className="nav-link">
                  Manage Orders
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/add-package" className="nav-link">
                  Add Package
                </Link>
              </li>
            </ul>
            <div class="d-flex navbar-nav me-auto mb-2 mb-lg-0">
              {user.email ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <li class="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              )}
              {user.email ? user.displayName : ""}
            </div>
          </div>
        </div>
      </nav>
      {/* video */}
    </div>
  );
};

export default Navbar;
