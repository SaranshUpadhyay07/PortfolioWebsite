import React from 'react';

function Footer() {
  return (
    <footer
      id="footer"
      role="contentinfo"
      className="pt-5"
      style={{ opacity: 1, top: '0px', position: 'relative', paddingTop: '60px' }}
    >
      {/* .top button that floats above the footer */}
      <a className="top" href="#top">Back to top</a>

      {/* Bootstrap container */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Left copyright */}
            <div className="left mb-4 ">
              <a className="transition" href="https://splendorous-capybara-a57881.netlify.app/#top">
                © 2025 Saransh Upadhyay
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="gradient-white"></div>
    </footer>
  );
}

export default Footer;
