import axios from "axios";
import React, { useState } from "react";
import Loader from "../Loader";
import { useDisclosure } from "../../hooks/useDisclosure";
import SuccessModal from "../Modals.tsx/SuccessModal";

const Appointment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    department: "",
    message: "",
  });

  const successModal = useDisclosure();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    const { name, email, phone, date, department, message } = formData;

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
                        <span class="label">Phone:</span> <span class="value">${phone}</span>
                    </div>
                    <div class="data-row">
                        <span class="label">Date:</span> <span class="value">${date}</span>
                    </div>
                    <div class="data-row">
                        <span class="label">Department:</span> <span class="value">${department}</span>
                    </div>
                    <div class="data-row">
                        <span class="label">Message:</span>
                        <div class="value">${message}</div>
                    </div>
                    <!-- Add more rows as needed for each form field -->
                    <div class="footer">
                        This message was sent from the Make an Appointment form submission on your website.
                    </div>
                </div>
            </body>

            </html>
    `;

    try {
      const resp = await axios.post(
        "https://api.useplunk.com/v1/send",
        {
          subject: "New Appointment (Form Submission)",
          to: "appointments@viewpointhms.com",
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
      console.log("resp", resp);

      if (resp.status === 200) {
        successModal.open();

        setFormData({
          name: "",
          email: "",
          date: "",
          phone: "",
          department: "",
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

  return (
    <>
      <section
        id="appointment"
        className="appointment section-bg py-10"
        style={{ paddingTop: "130px", paddingBottom: "90px" }}
      >
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Make an Appointment</h2>
            <p>
              Effortlessly prioritize your well-being – make an appointment with
              our dedicated health management services. Your journey to optimal
              health starts with a simple click or or call. With a team of
              seasoned professionals, we offer comprehensive management
              solutions that go beyond the conventional, ensuring sustainable
              success and growth.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="php-email-form">
            <div className="row">
              <div className="col-md-4 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 form-group mt-3">
                <input
                  type="date"
                  name="date"
                  className="form-control datepicker"
                  id="date"
                  placeholder="Appointment Date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-4 form-group mt-3">
                <select
                  name="department"
                  id="department"
                  className="form-select"
                  value={formData.department}
                  onChange={handleInputChange}
                >
                  <option value="">Select Department</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Intensive Care Unit (ICU)">
                    Intensive Care Unit (ICU)
                  </option>
                  <option value="Padiatrics">Padiatrics</option>
                  <option value="Pharmacy"> Pharmacy</option>
                  <option value="Pathology">Pathology</option>
                  <option value="Radiology">Radiology</option>
                  <option value="Obstetrics and Gynecology">
                    Obstetrics and Gynecology
                  </option>
                  <option value="Accidents & Emergency">
                    Accidents & Emergency
                  </option>
                  <option value="Burns & Trauma">Burns & Trauma</option>
                  <option value=" General Surgery"> General Surgery</option>
                </select>
              </div>
            </div>

            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message (Optional)"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your appointment request has been sent successfully. Thank you!
              </div>
            </div>
            {error && (
              <span className="texct-red-400 text-xs md:text-sm">{error}</span>
            )}
            <div className="text-center">
              <button type="submit">Make an Appointment</button>
            </div>
          </form>
        </div>
        {isLoading && <Loader />}
        {successModal.isOpen && <SuccessModal modal={successModal} />}
      </section>
    </>
  );
};

export default Appointment;
