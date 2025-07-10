import React from 'react';
import { Link } from 'react-router-dom';

const projectData = [
  {
    title: 'Key-Press Fidget',
    description: 'An interactive 3D keyboard key using HTML, CSS, and JavaScript.',
    link: '#',
  },
  {
    title: 'Omni Foods',
    description: 'A modern food website built with responsive design.',
    link: '#',
  }
];

function ProjectsSlider() {
  return (
    <div className="different-section py-5 mb-5">
      <div className="container-lg px-lg-5 py-2 text-dark">
        <div className="px-lg-5">
          <h2 className="mb-5 fw-normal display-4 text-center text-md-start px-lg-3">My Latest Projects</h2>
          <div className="px-lg-5 projectslider-card">
            <div className="row custom-project-row ">
              {projectData.map((project, index) => (
                <div key={index} className="col-12 mb-4 d-flex col-lg-6">
                  <div className="custom-project-card w-100 h-100">
                    <div className="custom-card-body d-flex flex-column p-4">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-4">
              <Link to="/projects" className="btn btn-outline-dark px-4 py-2">
                See More Projects
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSlider;
