import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      <nav className="navbar navbar-expand-lg fixed-top px-4 navbar-div">

          {/* Toggler */}
          <button
            className="navbar-toggler text-white bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-link me-5 fs-5">Home</Link>
              <Link to="/about" className="nav-link me-5 fs-5">About</Link>
              <Link to="/projects" className="nav-link me-5 fs-5">Projects</Link>
              <Link to="/blog" className="nav-link me-5 fs-5">Blog</Link>
            </div>
          </div>
      </nav>

      {/* Floating Contact Me Button */}
      <button
        className="floating-contact"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Contact Me
      </button>

      {/* Contact Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white">
            <div className="modal-header">
              <h5 className="modal-title">Contact Me</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <ul className="list-unstyled">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/blog" className="nav-link">Blog</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
