import React from 'react';

function Journey() {
    return (
        <div className='diff-section pt-3'>
            <section className="container-lg px-lg-5 py-2 bg-white text-dark">
                <div className="px-lg-5">
                    <div className="px-lg-5">
                        <h1 className="mb-5 fw-light display-4 text-sm-center text-md-start text-lg-start">
                            My Journey 🚀
                        </h1>
                        <p className="text-muted mb-4">
                            My journey in tech has been a blend of passion, learning, and growth. Here’s a glimpse into my path:
                        </p>

                        <div className="timeline">
                            <div className="timeline-item">
                                <h5 className="fw-semibold">2023 - 2024</h5>
                                <p>Started my journey with a focus on web development, learning HTML, CSS, and JavaScript.</p>
                            </div>
                            <div className="timeline-item">
                                <h5 className="fw-semibold">2024 - 2025</h5>
                                <p>Dived deeper into frontend frameworks like React, explored backend technologies, and started building full-stack projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Journey;
