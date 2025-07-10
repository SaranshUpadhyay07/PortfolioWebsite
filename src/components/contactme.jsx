import React from 'react';

function ContactMe() {
  return (
    <div className=" different-section contact-section pt-5 pb-5 bg-light mt-5">
      <section className="container-lg px-lg-5 py-3 text-dark">
        <div className="px-lg-5">
          <h1 className="mb-4 fw-normal display-5 text-center">Contact Me</h1>
          <p className="lead mb-4 text-center ">
            If you’d like to connect, collaborate or just say hi — drop a message!
          </p>

          <form
            action="mailto:saransh@example.com"
            method="POST"
            encType="text/plain"
            className="row g-3 px-lg-4"
          >
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="Name" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="Email" required />
            </div>
            <div className="col-12">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" name="Subject" />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" name="Message" rows="5" required></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary Resume btn-lg px-4 mt-3">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactMe;
