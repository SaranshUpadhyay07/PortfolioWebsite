import React from 'react';

function Hero() {
  return (
    <div className="container py-5 my-5 top-container">
      <div className="row align-items-center hero-section">
        {/* Text Section */}
        <div id="text-main" className="col-lg-5 text-main">
          <h1 className="display-3">about.</h1>
          <h3 className="display-6">Hey,I am Saransh Upadhyay</h3>
          <p className="intro fs-5 mb-2">
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
  );
}

export default Hero;
