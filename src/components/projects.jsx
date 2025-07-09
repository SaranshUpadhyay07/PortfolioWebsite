import React, { useState } from 'react';

const projectData = [
  {
    title: 'Key-Press Fidget',
    category: 'Web',
    description:
      'An interactive and visually engaging 3D keyboard key built using HTML, CSS, and JavaScript',
    videoUrl: 'projects/key_press.mp4',
    thumbnailUrl: 'projects/key_press_thumbnail.png',
    link: '#',
  },
  {
    title: 'Project Two',
    category: 'App',
    description: 'A brief description of Project Two.',
    videoUrl: '',
    thumbnailUrl: '',
    link: '#',
  },
  {
    title: 'Omni Foods',
    category: 'Web',
    description: 'A brief description of Omni Foods website.',
    videoUrl: 'projects/omni_food.mp4', // <-- make sure file is named correctly
    thumbnailUrl: 'projects/omni_food_thumbnail.png',
    link: '#',
  },
  {
    title: 'Project Four',
    category: 'ML',
    description: 'A brief description of Project Four.',
    videoUrl: '',
    thumbnailUrl: '',
    link: '#',
  },
  {
    title: 'Temp Track',
    category: 'Web',
    description: 'A brief description of Project Five.',
    videoUrl: 'projects/Temp_track.mp4',
    thumbnailUrl: 'projects/Temp_track.png',
    link: '#',
  },
];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Web');

  const categories = ['Web', 'App', 'ML'];

  const filteredProjects =
    selectedCategory === ''
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <div className="container py-5 my-5 top-container container-lg px-lg-5">
        <div className="px-lg-5 my-lg-5">
          <div className='py-lg-4'>
            <div className="hero-section align-items-center row pt-5 px-lg-5 col-12">
            <div id="text-main" className="col-lg-4 text-main mr-5 mb-lg-4">
              <h1 className="mb-3 fw-light display-1 text-sm-center">projects.</h1>
              <p className="intro fs-4">Check out my projects</p>
            </div>
            <div id="img-project" className="col-lg-6 text-center ">
              <img
                src="/images/portfolio.jpg"
                className="img-fluid shadow-sm d-none d-lg-block"
                alt="Portrait of Saransh Upadhyay"
                id="hero-image2"
              />
            </div>
            <div className="text-center mt-5 d-none d-lg-block">
              <button
                className="scroll-down-btn"
                onClick={() => {
                  window.scrollBy({
                    top: window.innerHeight,
                    behavior: 'smooth',
                  });
                }}
              >
                <img
                  src="/images/scroll-down.png"
                  alt="Scroll Down"
                  className="scroll-icon mt-3"
                />
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Filter + Projects */}
      <div className="diff-section py-5 mb-5">
        <div className="container-lg px-lg-5 py-2 text-dark">
          <div className="px-lg-5">
            <div className="px-lg-5">
              {/* Filter Buttons */}
              <div className="mb-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`btn btn-sm me-2 mb-2 ${
                      selectedCategory === category
                        ? 'view-project text-light'
                        : 'btn-outline-dark'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Project Cards */}
              <div className="row">
                {filteredProjects.map((project, index) => (
                  <div key={index} className="col-12 col-sm-6 col-lg-4 mb-4 d-flex">
                    <div className="card h-100 w-100 project-card">
                      {/* Video on Hover */}
                      {project.videoUrl && project.thumbnailUrl ? (
                        <div
                          className="position-relative"
                          style={{ height: '200px', overflow: 'hidden' }}
                          onMouseEnter={(e) => {
                            const video = e.currentTarget.querySelector('video');
                            if (video) video.play();
                          }}
                         onMouseLeave={(e) => {
                            const video = e.currentTarget.querySelector('video');
                            const thumbnail = e.currentTarget.querySelector('img');

                            if (video && thumbnail) {
                            video.pause();
                            video.currentTime = 0;
                            video.style.opacity = 0;
                            thumbnail.style.opacity = 1;
                            }
                        }}
                        >
                          <img
                            src={project.thumbnailUrl}
                            alt={`${project.title} Thumbnail`}
                            className="position-absolute w-100 h-100"
                            style={{ objectFit: 'cover', zIndex: 1 }}
                          />
                          <video
                            className="position-absolute w-100 h-100"
                            muted
                            playsInline
                            loop
                            preload="none"
                            style={{
                              objectFit: 'cover',
                              zIndex: 2,
                              opacity: 0,
                              transition: 'opacity 0.3s ease-in-out',
                            }}
                            onCanPlay={(e) => {
                              e.currentTarget.style.opacity = 1;
                            }}
                          >
                            <source src={project.videoUrl} type="video/mp4" />
                          </video>
                        </div>
                      ) : (
                        <div
                          className="bg-dark text-white d-flex align-items-center justify-content-center"
                          style={{ height: '200px' }}
                        >
                          <span>No Preview</span>
                        </div>
                      )}

                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <a
                          href={project.link}
                          className="btn text-white view-project mt-auto"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
