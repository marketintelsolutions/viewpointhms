import React from "react";

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
            <div className="icon-box mt-5 mt-lg-0">
              <i className="bx bx-receipt"></i>
              <h4>Planning & Designing</h4>
              <p>
                Elevating healthcare environments for optimal patient
                well-being.
              </p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-cube-alt"></i>
              <h4>Biomedical Equipment Planning</h4>
              <p>
                Excellence through meticulous biomedical equipment planning.
              </p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-images"></i>
              <h4>Manpower Planning</h4>
              <p>We nurture wellness through meticulous manpower planning.</p>
            </div>
            <div className="icon-box mt-5">
              <i className="bx bx-shield"></i>
              <h4>Hospital Business Stretegy</h4>
              <p>
                Thriving through strategy by elevating healthcare with a dynamic
                hospital business approach."
              </p>
            </div>
          </div>
          <div
            className="image col-lg-6 order-1 order-lg-2 rounded-[10px]"
            style={{ backgroundImage: 'url("assets/img/features.jpg")' }}
            data-aos="zoom-in"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
