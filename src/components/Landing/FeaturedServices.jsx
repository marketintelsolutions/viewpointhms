import React from "react";

const FeaturedServices = () => {
  return (
    <section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h4 className="title">
                <a href="">Quality Improvement Initiatives</a>
              </h4>
              <p className="description">
                We focus on implementing quality improvement programs to enhance
                patient outcomes.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon">
                <i className="fas fa-pills"></i>
              </div>
              <h4 className="title">
                <a href="">Electronic Health Records (EHR) Systems</a>
              </h4>
              <p className="description">
                EHR services facilitate secure and organized digital storage of
                patient information, promoting easy accessibility for healthcare
                professionals.{" "}
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon">
                <i className="fas fa-thermometer"></i>
              </div>
              <h4 className="title">
                <a href="">Patient Scheduling and Appointment Management</a>
              </h4>
              <p className="description">
                We streamline the scheduling process, ensuring efficient
                appointment booking and reducing wait times.
                <br />{" "}
                <span className="opacity-60 font-extrabold">
                  <a href="/#appointment">Make an appointment</a>
                </span>
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon">
                <i className="fas fa-dna"></i>
              </div>
              <h4 className="title">
                <a href="">Telehealth and Remote Patient Monitoring</a>
              </h4>
              <p className="description">
                With advancements in technology, we incorporates telehealth
                solutions and remote patient monitoring services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
