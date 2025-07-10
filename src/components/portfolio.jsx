import React from 'react';
import {Link} from 'react-router-dom';

function Portfolio(){
    return(
        <div className="different-section pt-3 pb-5">
            <div className="container-lg px-lg-5 py-2 text-dark">
                <div className="px-lg-5 ">
                    <div className="px-lg-5 portfolio">
                        <h1 className="mb-5 fw-light display-4 text-sm-center text-md-start text-lg-start">
                            Portfolio
                        </h1>
                        <div className="row col-12">
                            <div className="col-md-5">
                                <img src="/images/Laptop.png" alt="Laptop img" className="img-fluid  portfolio-pic mb-sm-4" data-aos="fade-right" data-aos-easing="ease-in" data-aos-duration="1000" data-aos-delay="30" data-aos-once="true" />
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-5 mt-3 fs-6">
                                 <p className="lead portfolio-para" >Here are some of the projects I’ve built using modern web technologies. From frontend UI to full-stack apps, each project reflects my skills and passion for clean, functional design.</p>
                                 <div className="Resume btn btn-primary btn-sm text-light rounded-pill my-3 py-3 px-3 check"><Link to='/projects'>Check them out</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio