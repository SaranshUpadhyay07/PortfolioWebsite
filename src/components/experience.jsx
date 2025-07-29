import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Internship at XYZ Company",
      description: "Developed a web application using React and Node.js.",
    },
    {
      title: "Freelance Project",
      description: "Built a mobile app for a local business.",
    },
    {
      title: "Open Source Contributions",
      description: "Contributed to several projects on GitHub.",
    },
  ];

  return (
    <div className="diff-section pt-3  ">
      <section className="container-lg  px-lg-5 py-3  text-dark">
          <div className='px-lg-5'>
             <h1 className="mb-5 fw-normal display-4 text-center text-md-start px-lg-3">Experience</h1>
                <p className="lead mb-5 px-lg-4">
                I have worked on various projects and internships that have helped me grow as a software engineer. Here are some of the highlights:
                </p>

                <div className="timeline position-relative ps-4 mx-lg-4 border-start border-3 border-primary ">
                {experiences.map((exp, index) => (
                    <div className="timeline-item mb-5 position-relative " key={index}>
                    <div className="circle bg-primary position-absolute top-0 start-0 translate-middle rounded-circle "></div>
                    <h5 className="fw-bold">{exp.title}</h5>
                    <p className="mb-0">{exp.description}</p>
                    </div>
                ))}
                </div>
          </div>
      </section>
    </div>
  );
}

export default Experience;
