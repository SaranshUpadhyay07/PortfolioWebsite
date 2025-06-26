import React, { useState } from 'react';

const projectData = [
    {
        title: 'Project One',
        category: 'Web',
        description: 'A brief description of Project One.',
        imageUrl: 'https://via.placeholder.com/300x200',
        link: '#'
    },
    {
        title: 'Project Two',
        category: 'App',
        description: 'A brief description of Project Two.',
        imageUrl: 'https://via.placeholder.com/300x200',
        link: '#'
    },
    {
        title: 'Project Three',
        category: 'Web',
        description: 'A brief description of Project Three.',
        imageUrl: 'https://via.placeholder.com/300x200',
        link: '#'
    },
    {
        title: 'Project Four',
        category: 'ML',
        description: 'A brief description of Project Four.',
        imageUrl: 'https://via.placeholder.com/300x200',
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
            <div className="custom-jumbotron additional jumbotron-fluid">
                <div className="container text-dark sections" id="About-section">
                    <h1 className="display-4 mb-4">Projects 📽️</h1>

                    {/* Filter Buttons */}
                    <div className="mb-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`btn btn-sm me-2 mb-2  ${
                                    selectedCategory === category ? 'view-project text-light' : 'btn-outline-dark'
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
                                        <a href={project.link} className="btn text-white view-project mt-auto">View Project</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
