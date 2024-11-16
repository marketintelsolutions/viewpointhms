import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState("false");

  return (
    <>
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
          <div className="align-items-center d-none d-md-flex">
            <i className="bi bi-clock"></i> Monday - Saturday, 8AM to 10PM
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-phone"></i> Call us now +1 5589 55488 55
          </div>
        </div>
      </div>
      <header id="header" class="fixed-top">
        <div class="container  d-flex align-items-center">
          <Link to={"/"} class="logo me-auto">
            <img src="assets/img/logo.png" alt="" />
          </Link>

          <nav id="navbar" class="navbar  order-last order-lg-0">
            <ul
              className={`${isMenu ? "zr:flex lg:flex" : "zr:hidden lg:flex"}`}
            >
              <li>
                <NavLink className="nav-link scrollto" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="/services">
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink className="nav-link scrollto" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <i
              onClick={() => setIsMenu(!isMenu)}
              class="bi ml-4 bi-list mobile-nav-toggle"
            ></i>
          </nav>

          <a href="#appointment" class="appointment-btn scrollto">
            <span class="d-none d-md-inline">Make an</span> Appointment
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
