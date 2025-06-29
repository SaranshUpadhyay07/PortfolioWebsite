import React, { useState } from 'react';

const projectData = [
    {
        title: 'Project One',
        category: 'Web',
        description: 'A brief description of Project One.',
        imageUrl: '',
        link: '#'
    },
    {
        title: 'Project Two',
        category: 'App',
        description: 'A brief description of Project Two.',
        imageUrl: '',
        link: '#'
    },
    {
        title: 'Project Three',
        category: 'Web',
        description: 'A brief description of Project Three.',
        imageUrl: '',
        link: '#'
    },
    {
        title: 'Project Four',
        category: 'ML',
        description: 'A brief description of Project Four.',
        imageUrl: '',
        link: '#'
    }
];

function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('Web');

    const categories = ['Web', 'App', 'ML'];

    const filteredProjects =
        selectedCategory === ''
            ? projectData
            : projectData.filter(project => project.category === selectedCategory);

    return (
        <div className="diff-section">
            <div className="container-lg px-lg-5 py-2 text-dark">
                <div className="px-lg-5">
                    <div className="px-lg-5">
                        <h1 className="mb-5 fw-light display-4 text-sm-center text-md-start text-lg-start">
                            Projects 📽️
                        </h1>

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

                        {/* Filtered Project Cards */}
                        <div className="row">
                            {filteredProjects.map((project, index) => (
                                <div key={index} className="col-12 col-md-6 mb-4 d-flex">
                                    <div className="card h-100 w-100">
                                        <img
                                            src={project.imageUrl}
                                            className="card-img-top"
                                            alt={`${project.title} Screenshot`}
                                        />
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
    );
}

export default Projects;
