import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About Us</h2>
          <p>
            Founded in 2022 Viewpoint Health Management System is a company
            specialising in Medical consultancy business which deals with state
            of Art Medical equipments and seamless integration of cutting-edge
            management practices with a human-centric approach company is based
            in Nigeria.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <img
              src="assets/img/about.jpg"
              className="img-fluid rounded-[10px]"
              alt=""
            />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 content px-10"
            data-aos="fade-left"
          >
            <h1 className="text-xl">
              We're Top Professional Hospital Planning & Management consultancy
            </h1>
            <br />
            <p
              style={{ fontSize: "larger", textAlign: "justify" }}
              className="mt-0 font-light"
            >
              We believe that every individual deserves access to high-quality
              healthcare services, and we are dedicated to making that a
              reality. Our team of experienced healthcare professionals and
              management experts work collaboratively to optimize processes,
              improve efficiency, and enhance the overall healthcare delivery
              system.
            </p>

            <Link
              to={"/about"}
              style={{ marginTop: "80px" }}
              className="btn-learn-more"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
