import React from 'react';

function Portfolio(){
    return(
        <div className="diff-section pt-3 pb-5">
            <div className="container-lg px-lg-5 py-2 text-dark">
                <div className="px-lg-5">
                    <div className="px-lg-5 portfolio">
                        <h1 className="mb-5 fw-light display-4 text-sm-center text-md-start text-lg-start">
                            Projects 
                        </h1>
                        <div className="row">
                            <div className="col-md-5">
                                <img src="/images/Laptop.webp" alt="Laptop img" className="img-fluid rounded-pill portfolio-pic"/>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-5 mt-3 fs-5">
                                 <p className="lead">Here are some of the projects I’ve built using modern web technologies. From frontend UI to full-stack apps, each project reflects my skills and passion for clean, functional design.</p>
                                 <div className="Resume btn btn-primary btn-sm text-light rounded-pill my-3 py-3 px-3"><a>Check them out</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio