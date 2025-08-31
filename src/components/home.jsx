import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Experience from './experience.jsx';
import ProjectSlider from './projectslider.jsx';
import Skills from './skills.jsx'
import Quote from './quote.jsx';

function HomePage() {
  return (
    <>
    <section className=" different-section d-flex align-items-center justify-content-center mb-5">
      <div class="py-5 ">
        <div class="pt-5">
          <div class="pt-4 pb-sm-5 pb-md-1">
            <div className="home-inner">
        <img
          src="./images/Me.png"
          alt="Saransh Upadhyay Portrait"
          className="profile-img"
        />

        <h1>
          Hi, I'm <span className="highlight">Saransh Upadhyay</span>
        </h1>
        <p className="tagline">Aspiring Software Engineer & Curious Technophile</p>

        <span className="typing">
          <TypeAnimation
            sequence={[
              'Web Developer',
              1500,
              'AI Enthusiast',
              1500,
              'React + TS Fanboy',
              1500,
              'Procrastinator ',
              2000,
              '',
              500
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </span>

        <div className="socials">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>
        <div className="d-flex flex-wrap  align-items-center justify-content-center home-buttons">
            <Link className="btn btn-primary btn-lg mt-3 Resume" to="/about">
              About Me
            </Link>
            <button className="btn btn-primary btn-lg mt-3 Resume mb-0">
                <a href="./pdf/resume.pdf" target="_blank"><ion-icon name="download-outline"></ion-icon> Resume</a>
              </button>
          </div>
      </div>
          </div>
        </div>
      </div>

    </section>
    <Experience />
    <Skills />
    <ProjectSlider />
    <Quote />
    </>
  );
}

export default HomePage;

