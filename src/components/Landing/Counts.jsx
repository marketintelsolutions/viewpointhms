import React from "react";

const Counts = () => {
  return (
    <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">
        <div className="row no-gutters">
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="fas fa-user-md"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="85"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>

              <p>
                <strong>Doctors</strong> They are pioneering care with
                unwavering expertise and compassion.
              </p>
              <a href="#">Find out more &raquo;</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="far fa-hospital"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="41"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Departments</strong> Exemplary Hospital departments
                which delivering excellence in every facet of patient care
              </p>
              <a href="#">Find out more &raquo;</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="fas fa-flask"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="14"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Research Lab</strong> Innovative research lab that
                Advances our healthcare servcies through cutting-edge science
                and discovery.
              </p>
              <a href="#">Find out more &raquo;</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="fas fa-award"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="80"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Awards</strong> We have won multiple awards from several
                organizations
              </p>
              <a href="#">Find out more &raquo;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counts;
