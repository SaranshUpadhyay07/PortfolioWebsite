import React from 'react';
import { Link } from 'react-router-dom';

const projectData = [
  {
    title: 'Key-Press Fidget',
    description: 'An interactive 3D keyboard key using HTML, CSS, and JavaScript.',
    link: '#',
    image: '/projects/key_press_thumbnail.png',
  },
  {
    title: 'Omni Foods',
    description: 'A modern food website built with responsive design.',
    link: '#',
    image: '/projects/omni_food_thumbnail.png',
  }
];

function ProjectsSlider() {
  return (
    <section className="different-section py-5 mb-5 elegant-bg ">
      <div className='container-lg px-lg-5 py-3 text-light'>
        <div className="container-lg px-lg-5 text-dark">
        <h2 className="mb-5 fw-normal display-4 text-center text-md-start px-lg-4 gradient-text ">
          My Latest Projects
        </h2>

        {projectData.map((project, index) => (
          <div
            key={index}
            className={`d-flex flex-column flex-md-row align-items-center mb-5  px-lg-5 gap-4 ${
              index % 2 !== 0 ? 'flex-md-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <div className="flex-shrink-0 project-img-wrapper shadow-lg" style={{ flex: '1 1 45%' }}>
              <img
                src={project.image || '/projects/default_project.png'}
                alt={project.title}
                className="img-fluid w-100 rounded-4"
              />
            </div>

            {/* Text */}
            <div style={{ flex: '1 1 55%' }} className="px-md-4 text-center text-md-start">
              <h3 className="fw-semibold mb-3">{project.title}</h3>
              <p className="text-secondary mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                {project.description}
              </p>
            </div>
          </div>
        ))}

        <div className="text-center mt-5">
          <Link to="/projects" className="btn btn-outline-dark px-4 py-2 rounded-pill shadow-sm">
            See More Projects
          </Link>
        </div>
      </div>
      </div>

    </section>
  );
}

export default ProjectsSlider;
