import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer
      id="footer"
      role="contentinfo"
      style={{
        opacity: 1,
        top: '0px',
        position: 'relative',
        paddingTop: '40px',
        backgroundColor: '#f8f9fa'
      }}
    >
      {/* Back to top button */}
      <a className="top d-block text-center mb-3 text-decoration-none" href="#top">Back to top</a>

      {/* Compact footer navbar, only visible on large screens */}
      <div className="container">
        <div className="d-none d-lg-flex  flex-wrap gap-3 fs-6 mb-3 text">
          <Link className="text-dark text-decoration-none" to="/">Home</Link>
          <Link className="text-dark text-decoration-none" to="/aboutme">About</Link>
          <Link className="text-dark text-decoration-none" to="/projects">Projects</Link>
          <Link className="text-dark text-decoration-none" to="/blog">Blog</Link>
          <Link className="text-dark text-decoration-none" to="/contactme">Contact</Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="container text-center">
        <a
          className="text-muted text-decoration-none"
          href="https://splendorous-capybara-a57881.netlify.app/#top"
        >
          © 2025 Saransh Upadhyay
        </a>
      </div>

      <div className="gradient-white"></div>
    </footer>
  );
}

export default Footer;
