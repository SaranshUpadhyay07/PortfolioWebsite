import React from 'react';

function Hero() {
  return (
    <div className="container py-4 my-5 top-container container-lg px-lg-5">
      <div className="px-lg-5">
       <div className="hero-section align-items-center row  px-lg-5">
           {/* Text Section */}
        <div id="text-main" className="col-lg-6 text-main mt-5">
          <h1 className="display-3 mb-1 mt-lg-2">about. <img src="/images/arrow.svg" className="arrow display-3 mb-4"/></h1>
          <h3 className="display-6 fs-2 pb-4">Hey,I am Saransh Upadhyay</h3>
          <p className="intro mb-lg-5" style={{ fontSize: '1.2rem' }}>
            A self-motivated tech enthusiast with a passion for startups, machine learning, and finance-tech, especially high-frequency trading.
          </p>
        </div>
        <div id="img-project" className="col-lg-4 text-center">
              <img
                src="/images/about me.png"
                className="img-fluid d-none d-lg-block"
                alt="Portrait of Saransh Upadhyay"
                id="hero-image"
                loading="lazy"
              />
        </div>
        <div className="text-center my-4 d-none d-lg-block">
          <button
            className="scroll-down-btn"
            onClick={() => {
              window.scrollBy({
                top: window.innerHeight* 0.8,
                behavior: 'smooth',
              });
            }}
          >
            <img
              src="/images/scroll-down.png"
              alt="Scroll Down"
              className="scroll-icon"
            />
          </button>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Hero;
