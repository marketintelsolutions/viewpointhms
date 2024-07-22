import React from "react";
import { services } from "../../utils/data";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services" className="services services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            Our Services provides an in-depth look into the comprehensive range
            of health management solutions we offer. From preventive health
            screenings to chronic disease management, our services are designed
            to meet your unique needs. Dive into the details of each offering
            and learn how Viewpoint Health Management Service can be your
            partner in achieving and maintaining the best health services.
          </p>
        </div>

        {/* <div className="row">
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="icon">
              <i className="fas fa-heartbeat"></i>
            </div>
            <h4 className="title">
              <a href="/services.html">Hospital Management Services</a>
            </h4>
            <p className="description">
              We believe that every individual deserves access to high-quality
              healthcare services, and we are dedicated to making that a
              reality.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon">
              <i className="fas fa-pills"></i>
            </div>
            <h4 className="title">
              <a href="/services.html">
                Consulting and Clinical Advisory Services
              </a>
            </h4>
            <p className="description">
              These services bridge the gap between clinical expertise and
              operational efficiency, aiming to enhance patient outcomes,
              streamline processes...
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="icon">
              <i className="fas fa-hospital-user"></i>
            </div>
            <h4 className="title">
              <a href="/services.html">Dispensing and Pharmacy Management</a>
            </h4>
            <p className="description">
              These services encompass a range of activities aimed at ensuring
              the safe, efficient, and effective handling of medications, as
              well as...
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="icon">
              <i className="fas fa-dna"></i>
            </div>
            <h4 className="title">
              <a href="/services.html">Managed Care</a>
            </h4>
            <p className="description">
              Our Managed Care processes reduce unnecessary health care costs
              through a variety of mechanisms.{" "}
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon">
              <i className="fas fa-wheelchair"></i>
            </div>
            <h4 className="title">
              <a href="/services.html">Clinic Services</a>
            </h4>
            <p className="description">
              These services are designed to address the immediate healthcare
              needs of individuals and contribute to the overall management of
              health within a community...{" "}
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="icon">
              <i className="fas fa-notes-medical"></i>
            </div>
            <h4 className="title">
              <a href="/services.html">Healthy Living</a>
            </h4>
            <p className="description">
              With the needs of patients and communities being in a constant
              change of flux, Healthshare will consolidate certain initiatives
              to enhance the added value...
            </p>
          </div>
        </div> */}

        <div className="grid grid-cols-2 mt-20">
          <div className="relative ">
            <img
              src="assets/img/serviceshome.jpg"
              alt="services home"
              className="rounded-[15px] w-[500px]"
            />
            <div className="absolute top-0 left-0 h-full w-[500px] bg-[#00000049] rounded-[15px]"></div>
          </div>
          <div className="flex flex-col gap-20">
            <h2 className="text-3xl tracking-wider">
              A Commitment to Your Well-being
            </h2>
            <div className="grid grid-cols-2 gap-10 gap-y-20">
              {services.slice(0, 6).map((item, index) => (
                <div className="border-b border-primaryBlue tracking-wide flex flex-col justify-between gap-10">
                  {item}
                  <div className=" bg-primaryBlue h-[2px] w-10"></div>
                </div>
              ))}
            </div>
            <Link
              to={"/services"}
              className="py-2 px-4 border-2 border-primaryBlue rounded-[8px] w-fit hover:bg-primaryBlue hover:text-white transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
