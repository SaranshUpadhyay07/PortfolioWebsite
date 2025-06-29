import React from 'react';

const skills = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'Java'],
  Frontend: ['React', 'Bootstrap', 'Tailwind CSS'],
  Backend: ['Express.js'],
  Databases: ['MongoDB', 'PostgreSQL', 'MySQL']
};

const SkillTag = ({ name }) => (
  <span className="badge rounded-pill bg-light text-dark border me-2 mb-2 px-3 py-2">
    {name}
  </span>
);

const Skills = () => {
  return (
    <section className="container-lg py-2 bg-white text-dark px-lg-5">
      <div className="px-lg-5 ">
        <div className=" px-lg-5 mx-auto different-section site-container">
            <h1 className="mb-5 fw-light display-4 text-sm-center text-md-start text-lg-start">My Skills 🛠️</h1>
          <p className="text-muted mb-4">
            I have developed a diverse set of technical skills through my journey in the tech industry. I’m continuously striving to expand my knowledge and enhance my expertise.
          </p>

          <div className="row">
            {Object.entries(skills).map(([category, items], index) => (
              <div className="col-12 mb-4" key={index}>
                <h5 className="fw-semibold mb-2">{index + 1}. {category}</h5>
                <div className="d-flex flex-wrap">
                  {items.map((item, idx) => (
                    <SkillTag key={idx} name={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
