import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import axios from "axios";
import Loader from "../components/Loader";
import { useDisclosure } from "../hooks/useDisclosure";
import SuccessModal from "../components/Modals.tsx/SuccessModal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");

  const successModal = useDisclosure();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setError("");

    const { name, email, subject, message } = formData;

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
                      <span class="label">Name:</span> <span class="value">${name}</span>
                  </div>
                  <div class="data-row">
                      <span class="label">Email:</span> <span class="value">${email}</span>
                  </div>
                  <div class="data-row">
                      <span class="label">Phone:</span> <span class="value">${subject}</span>
                  </div>
                  <div class="data-row">
                      <span class="label">Message:</span>
                      <div class="value">${message}</div>
                  </div>
                  <!-- Add more rows as needed for each form field -->
                  <div class="footer">
                      This message was sent from the Contact form submission on your website.
                  </div>
              </div>
          </body>

          </html>
  `;

    try {
      const resp = await axios.post(
        "https://api.useplunk.com/v1/send",
        {
          subject: "Contact Form Submission",
          to: "hello@viewpointhms.com",
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
        successModal.open();

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Hero
        image={"assets/img/contacthero.jpg"}
        text="Contact"
        heading={"Contact Us"}
      />
      <section id="contact" class="contact">
        <div class="container">
          <div class="section-title">
            <p>
              We value your feedback and inquiries. Feel free to reach out to us
              through the provided contact information or use the form below.
              Our dedicated team is here to assist you promptly. Thank you for
              choosing us."
            </p>
          </div>
        </div>

        <div class="container">
          <div class="row mt-5">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-md-12">
                  <div class="info-box">
                    <i class="bx bx-map"></i>
                    <h3>Our Address</h3>
                    <p>
                      18A, Elsie Femi Pearse Str, off Adeola Odeku, Victoria
                      Island, Lagos, Nigeria.
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box mt-4">
                    <i class="bx bx-envelope"></i>
                    <h3>Email Us</h3>
                    <p>
                      info@viewpointhms.com
                      <br />
                      contact@viewpointhms.com
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box mt-4">
                    <i class="bx bx-phone-call"></i>
                    <h3>Call Us</h3>
                    <p>
                      +234 907 372 2905
                      <br />
                      +234 808 489 7887
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <form onSubmit={handleSubmit} className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required=""
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && (
                      <div className="text-red-400 text-xs md:text-sm">
                        {errors.name}
                      </div>
                    )}
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required=""
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && (
                      <div className="text-red-400 text-xs md:text-sm">
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required=""
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                  {errors.subject && (
                    <div className="text-red-400 text-xs md:text-sm">
                      {errors.subject}
                    </div>
                  )}
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control resize-none"
                    name="message"
                    rows="7"
                    placeholder="Message"
                    required=""
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  {errors.message && (
                    <div className="text-red-400 text-xs md:text-sm">
                      {errors.message}
                    </div>
                  )}
                </div>
                <span className="text-red-400">{error}</span>

                <div className="text-center mt-4">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {isLoading && <Loader />}
        {successModal.isOpen && (
          <SuccessModal
            message="Your message has being sent"
            modal={successModal}
          />
        )}
      </section>
    </>
  );
};

export default Contact;
