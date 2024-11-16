import axios from "axios";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid Email");
      return;
    }
    setLoading(true);

    const body = `
    <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Form Submission</title>
              <style>
                  body {
                      font-family: Arial, sans-serif;
                      line-height: 1.6;
                      color: #333;
                      padding: 20px;
                  }

                  .container {
                      max-width: 600px;
                      margin: auto;
                      background: #f4f4f4;
                      padding: 20px;
                      border-radius: 8px;
                  }

                  h2 {
                      color: #275e8f;
                  }

                  .data-row {
                      margin-bottom: 10px;
                      padding: 10px;
                      background: #fff;
                      border-radius: 5px;
                      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                  }

                  .label {
                      font-weight: bold;
                      color: #555;
                  }

                  .value {
                      margin-left: 10px;
                  }

                  .footer {
                      margin-top: 20px;
                      text-align: center;
                      font-size: 12px;
                      color: #888;
                  }
              </style>
          </head>

          <body>
              <div class="container">
                  <h2>New Form Submission</h2>
                  <div class="data-row">
                      <span class="label">Email:</span> <span class="value">${email}</span>
                  </div>
                  <div class="footer">
                      This message was sent from the Newsletter form  on your website.
                  </div>
              </div>
          </body>
          </html>
  `;

    try {
      const resp = await axios.post(
        "https://api.useplunk.com/v1/send",
        {
          subject: "Newsletter subscription",
          to: "subscriber@viewpointhms.com",
          body,
        },
        {
          headers: {
            Authorization: `Bearer ${
              import.meta.env.VITE_REACT_APP_USE_PLUNK_TOKEN
            }`,
          },
        }
      );

      if (resp.status === 200) {
        setEmail("");
        setIsSubmitted(true);
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message || error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <footer id="footer" className="z-10 relative">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-info">
                <h3>Viewpoint Health Management</h3>
                <p>
                  18A, Elsie Femi Pearse Str, <br /> off Adeola Odeku, Victoria
                  Island, <br />
                  Lagos, Nigeria
                  <br />
                  <strong>Phone:</strong> +234 808 489 7887
                  <br />
                  <strong>Email:</strong> info@viewpointhms.com
                  <br />
                </p>
                {/* <div class="social-links mt-3">
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
                </div> */}
              </div>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link to={"/"} href="#">
                    Home
                  </Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link to={"/about"} href="#">
                    About us
                  </Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link to={"/services"} href="#">
                    Services
                  </Link>
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
                  <Link to={"/services"}>Hospital Management</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link to={"/services"}>Consulting and Clinical Advisory</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link to={"/services"}>Dispensing and Pharmacy</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link to={"/services"}>Managed Care</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link to={"/services"}>Clinic Services</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link to={"/services"}>Healthy Living</Link>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Subscribe To Our Newsletter</p>
              <form onSubmit={handleSubmit}>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  type="email"
                  name="email"
                />
                {isSubmitted ? (
                  <span className="inline-flex gap-2 items-center  border-primaryBlue p-0">
                    Subscribed <FaCheck color="green" />{" "}
                  </span>
                ) : (
                  <input
                    disabled={loading}
                    className="disabled:opacity-30"
                    type="submit"
                    value="Subscribe"
                  />
                )}
              </form>
              {error && (
                <span className="text-red-400 text-xs md:text-sm">{error}</span>
              )}
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
