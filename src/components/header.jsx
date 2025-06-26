import React, { useEffect } from 'react';

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
    <div className="">
      <nav className="navbar navbar-div navbar-expand-lg fixed-top">
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
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link text-white" href="#">Home</a>
              <a className="nav-link text-white" href="#">Features</a>
              <a className="nav-link text-white" href="#">Pricing</a>
              <a className="nav-link disabled text-muted" href="#">Disabled</a>
            </div>
          </div>
          <button className="contact-me btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Contact Me</button>
      </nav>

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
