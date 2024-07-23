import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { whychooseus } from "../utils/data";
import Hero from "../components/Hero";

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <Hero
        image={"assets/img/abouthero.jpg"}
        text="About"
        heading={"About Us"}
      />
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <p>
              Founded in 2022 Viewpoint Health Management System is a company
              specialising in Medical consultancy business which deals with
              state of Art Medical equipments and seamless integration of
              cutting-edge management practices with a human-centric approach
              company is based in Nigeria.
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
              className="col-lg-6 pt-4 pt-lg-0 content flex flex-col justify-center"
              data-aos="fade-left"
            >
              <h1 className="text-xl">
                We're Top Professional Hospital Planning & Management
                consultancy
              </h1>
              <br />
              <p
                style={{
                  fontSize: "larger",
                  textAlign: "justify",
                }}
                className="font-light mt-8"
              >
                We believe that every individual deserves access to high-quality
                healthcare services, and we are dedicated to making that a
                reality. Our team of experienced healthcare professionals and
                management experts work collaboratively to optimize processes,
                improve efficiency, and enhance the overall healthcare delivery
                system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-gray-200">
        <div className="container px-0 border-l-[1px] grid grid-cols-2 border-gray-200">
          <div className="flex flex-col gap-12" data-aos="fade-left">
            <h2 className="pl-20 tracking-wide">OUR MISSION</h2>

            <h1 className="pl-20 border-l-2 border-primaryBlue tracking-wider text-2xl max-w-[500px]">
              To deliver exceptional healthcare management solutions that:
            </h1>

            <ul className="pl-20 flex flex-col gap-4">
              <li>- Improve patient outcomes and experience.</li>
              <li>- Enhance the quality and safety of care</li>
              <li>
                - Drive operational efficiency and financial sustainability
              </li>
              <li>- Support the well-being and development of our people</li>
              <li>
                - Foster a culture of innovation, collaboration, and continuous
                learning
              </li>
            </ul>
          </div>
          <div className="flex justify-end pr-20" data-aos="fade-right">
            <img
              src="assets/img/aboutside.jpg"
              alt="about"
              className="rounded-[15px] h-[600px] w-[500px]"
            />
          </div>
        </div>
      </section>
      <section
        className="h-lvh w-full sticky top-0 left-0"
        style={{
          backgroundImage: "url(assets/img/abouts.jpg)",
          backgroundSize: "cover",
        }}
      ></section>
      <section className=" bg-black w-full relative z-10 py-40">
        <div
          className="container border-l px-0 border-white text-white flex flex-col gap-20"
          data-aos="fade-up"
        >
          <h1 className="pl-20 tracking-wide">OUR VISION</h1>
          <p className="pl-20 border-l-2 font-normal border-white max-w-[700px] text-2xl tracking-wide">
            To be the global leader in healthcare management, transforming the
            industry through innovation, excellence, and patient-centred care.
          </p>
        </div>
        <div
          className="mt-40 container flex justify-center flex-col gap-20 items-center text-white text-xl font-extrabold"
          data-aos="fade-left"
        >
          <h2> WHY CHOOSE VIEWPOINT </h2>
          <div className="flex gap-10 flex-wrap justify-center">
            {whychooseus.map((item, index) => {
              return (
                <div
                  key={index}
                  className="rounded-[15px] w-[350px] flex flex-col gap-10 p-10 border border-white"
                >
                  <p className="pb-4 text-2xl w-fit border-b border-white">
                    {item.heading}
                  </p>
                  <p className="text-[16px] font-normal">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
