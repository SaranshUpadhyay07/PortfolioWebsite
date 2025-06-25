import React from 'react';

function About() {
    return(
        <div className=" diff-section">
            <div className="custom-jumbotron additional jumbotron-fluid">
                    <div className="container text-dark sections" id="About-section">
                    <h1 className="display-4">About me</h1>
                    <div className="paragraph">
                            <section className="intro">
                <p className="lead">
                    Hi, I'm Saransh — a self-motivated tech enthusiast with a passion for startups, machine learning, and finance-tech, especially high-frequency trading.
                </p>
                </section>
                <section className="what-i-do">
                <p className="lead">
                    I love building impactful, well-designed projects that solve real-world problems. With an entrepreneurial mindset, I'm always exploring new ideas and optimizing solutions.
                </p>
                </section>
                <section className="beyond-tech">
                <p className="lead">
                    Outside of tech, I track the stock market, watch Formula 1 🏎️, and play ⚽️ football and 🏀 basketball to stay sharp.
                </p>
                </section>
                <section className="creative-side">
                <p className="lead">
                    Music 🎵 and piano 🎹 help me unwind and stay creative.
                </p>
                </section>
                    </div>
                    </div>
            </div>
        </div>
    );
}

export default About;