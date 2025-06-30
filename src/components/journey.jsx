import React from 'react';

function Journey(){
    return(
        <section className=" container-lg px-lg-5 py-2 bg-white text-dark">
          <div className="px-lg-5">
              <div className=" px-lg-5  different-section" data-aos="slide-right" data-aos-duration="8000">
        <h1 className="mb-5 fw-light display-4 text-sm-center text-md-start text-lg-start">My Journey 🚀</h1>
        <p className="text-muted mb-4">
          My journey in tech has been a blend of passion, learning, and growth. Here’s a glimpse into my path:
        </p>

        <div className="timeline">
          <div className="timeline-item">
            <h5 className="fw-semibold">2019 - 2020</h5>
            <p>Started my journey with a focus on web development, learning HTML, CSS, and JavaScript.</p>
          </div>
          <div className="timeline-item">
            <h5 className="fw-semibold">2020 - 2021</h5>
            <p>Dived into React and Node.js, building my first full-stack applications.</p>
          </div>
          <div className="timeline-item">
            <h5 className="fw-semibold">2021 - 2022</h5>
            <p>Explored machine learning and data science, working on projects that involved data analysis and predictive modeling.</p>
          </div>
          <div className="timeline-item">
            <h5 className="fw-semibold">2022 - Present</h5>
            <p>Currently focused on high-frequency trading algorithms and fintech solutions, leveraging my skills to create impactful projects.</p>
          </div>
        </div>
      </div>
          </div>
    </section>
    );
}

export default Journey;