import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';

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
    <div >
      <nav className="navbar px-4 navbar-div navbar-expand-lg fixed-top">
        {/* Navbar Toggler */}
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible nav links */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link text-white fs-lg-4 fs-5 px-lg-4">Home</Link> 
            <Link to="/about" className="nav-link text-white fs-lg-4 fs-5 px-lg-4">About</Link> 
            <Link to="/projects" className="nav-link text-white fs-lg-4 fs-5 px-lg-4">Projects</Link> 
            <Link to="/blog" className="nav-link text-white fs-lg-4 fs-5 px-lg-4">Blog</Link> 
          </div>
        </div>
      </nav>

      {/* Contact Me button fixed at top-right */}
      <button
        className="btn btn-light position-fixed"
        style={{ top: '10px', right: '20px', zIndex: '1050' }}
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Contact Me
      </button>


      {/* Modal */}
      <div className="modal fade social-modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content bg-black text-light">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Contact Me</h1>
              <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="text-white">Feel free to reach out to me through any of the platforms below:</p>
              <ul className="list-styled">
                <li><a href="https://www.linkedin.com/in/saransh-upadhyay-81702020a/" className="text-decoration-none text-light">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/saransh_upadhyay07/ " target="_blank" className="text-decoration-none text-white">Instagram</a></li>
                <li><a href="https://x.com/SaranshUpadhy20" className="text-decoration-none text-white" target="_blank">X</a></li>
                <li><a href="#" className="text-decoration-none text-white" onClick={(e) => {e.preventDefault(); // Prevent default anchor behavior
                window.location.href = 'mailto:saransh.upadhyay07@gmail.com'; // Trigger mail client
            }}
            aria-label="Send Email"
            >Gmail</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
