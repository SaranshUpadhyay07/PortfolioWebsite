import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  useEffect(() => {
    const modal = document.getElementById('staticBackdrop');
    const content = document.getElementById('main-content');

    const handleShow = () => content?.classList.add('blurred');
    const handleHide = () => content?.classList.remove('blurred');

    modal?.addEventListener('show.bs.modal', handleShow);
    modal?.addEventListener('hidden.bs.modal', handleHide);

    return () => {
      modal?.removeEventListener('show.bs.modal', handleShow);
      modal?.removeEventListener('hidden.bs.modal', handleHide);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg px-4 navbar-div">
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
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
