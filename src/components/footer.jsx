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
            <div className="left mb-3">
              <a className="transition" href="https://www.adhamdannaway.com/">
                © 2025 Saransh Upadhyay
              </a>
            </div>

            {/* Nav links */}
            <nav id="nav-footer">
              <ul className="d-flex justify-content-center flex-wrap gap-3 list-unstyled m-0 p-0">
                <li className="page_item page-item-2 current_page_item">
                  <a href="https://www.adhamdannaway.com/about" aria-current="page">about</a>
                </li>
                <li className="page_item page-item-1552">
                  <a href="https://www.adhamdannaway.com/learn-ui-design">learn</a>
                </li>
                <li className="page_item page-item-7">
                  <a href="https://www.adhamdannaway.com/portfolio">portfolio</a>
                </li>
                <li className="page_item page-item-9">
                  <a href="https://www.adhamdannaway.com/blog">blog</a>
                </li>
                <li className="page_item page-item-11">
                  <a href="https://www.adhamdannaway.com/contact">contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="gradient-white"></div>
    </footer>
  );
}

export default Footer;
