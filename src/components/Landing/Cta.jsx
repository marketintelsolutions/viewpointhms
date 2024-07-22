import React from "react";

const Cta = () => {
  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="text-center flex flex-col gap-2.5">
          <h3>In an emergency? Need help now?</h3>
          <p>
            Please stay connected with our system's immediate assistance
            feature. Activate emergency alerts and access vital resources
            swiftly in critical situations. Your safety is our priority
          </p>
          <a className="cta-btn w-fit mx-auto scrollto" href="#appointment">
            Make an Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
