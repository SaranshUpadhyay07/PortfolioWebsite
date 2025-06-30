import React from 'react';

function Hero() {
  return (
    <div className="container py-5 my-5 top-container container-lg px-lg-5">
      <div className="px-lg-5">
       <div className="hero-section align-items-center row  px-lg-5">
           {/* Text Section */}
        <div id="text-main" className="col-lg-5 text-main">
          <h1 className="display-3 mb-1">about. <img src="/images/arrow.svg" class="arrow display-3 mb-4"/></h1>
          <h3 className="display-6 fs-2 pb-4">Hey,I am Saransh Upadhyay</h3>
          <p className="intro mb-2" style={{ fontSize: '1.2rem' }}>
            A self-motivated tech enthusiast with a passion for startups, machine learning, and finance-tech, especially high-frequency trading.
          </p>
          <button className="btn btn-primary btn-lg mt-3 Resume">
            <a href="./pdf/SaranshUpadhyay_resume.pdf" target="_blank"><ion-icon name="download-outline"></ion-icon> Resume</a>
          </button>
        </div>

        {/* Image Section */}
        <div id="img-main" className="col-lg-4 text-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQF5E9HPElXHoQ/profile-displayphoto-scale_400_400/B56ZeoR.U7H8Ag-/0/1750874975264?e=1756339200&v=beta&t=pqHknqahTkWc3wZyZpphs1UfChqfyW9YFxEHspjQ9WE"
            className="img-fluid rounded-circle shadow-sm"
            alt="Portrait of Saransh Upadhyay"
          />
        </div>
       </div>
      </div>
    </div>
  );
}

export default Hero;
