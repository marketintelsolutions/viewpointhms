import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="z-10 relative">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-info">
                <h3>Viewpoint Health Management</h3>
                <p>
                  A108 Adam Street <br />
                  NY 535022, USA
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@viewpointhms.com
                  <br />
                </p>
                <div class="social-links mt-3">
                  <a href="#" class="twitter">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="#" class="facebook">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="#" class="instagram">
                    <i class="bx bxl-instagram"></i>
                  </a>
                  <a href="#" class="google-plus">
                    <i class="bx bxl-skype"></i>
                  </a>
                  <a href="#" class="linkedin">
                    <i class="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Hospital Management</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Consulting and Clinical Advisory</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Dispensing and Pharmacy</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Managed Care</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Clinic Services</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Healthy Living</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Subscribe To Our Newsletter</p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright 2024{" "}
          <strong>
            <span>Viewpoint Health Management System</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
