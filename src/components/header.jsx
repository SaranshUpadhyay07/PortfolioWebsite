import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg px-4 navbar-div fixed-top">
        <NavLink to="/" className="navbar-brand">
          <img src="/images/SU.png" className="home-icon" alt="Logo" />
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
          <div className="navbar-nav ms-auto">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active-link' : ''}`
              }
            >
              about
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active-link' : ''}`
              }
            >
              projects
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active-link' : ''}`
              }
            >
              blog
            </NavLink>
            <NavLink
              to="/contactme"
              className={({ isActive }) =>
                `nav-link d-lg-none ${isActive ? 'active-link' : ''}`
              }
            >
              contact me
            </NavLink>
          </div>
        </div>
      </nav>

      <button
        className="floating-contact-btn d-none d-lg-block"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <NavLink to="/contactme" className="text-light text-decoration-none">Contact Me</NavLink>
      </button>
    </>
  );
}

export default Header;
