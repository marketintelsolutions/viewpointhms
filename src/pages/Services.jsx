import React, { useEffect } from "react";
import { howweWork, services } from "../utils/data";
import Hero from "../components/Hero";

const Services = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Hero
        image={"assets/img/serviceshero.jpg"}
        text="Services"
        heading={"Our Services"}
      />
      <section className="services">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <p>
              Our Services provides an in-depth look into the comprehensive
              range of health management solutions we offer. From preventive
              health screenings to chronic disease management, our services are
              designed to meet your unique needs. Dive into the details of each
              offering and learn how Viewpoint Health Management Service can be
              your partner in achieving and maintaining the best health
              services.
            </p>
          </div>

          <div className="mt-20">
            <div className="flex flex-col gap-20" data-aos="fade-left">
              <h2 className="text-3xl tracking-wider">
                A Commitment to Your Well-being
              </h2>
              <div className="grid grid-cols-2 gap-10 gap-y-20">
                {services.map((item, index) => (
                  <div className="border-b border-primaryBlue tracking-wide flex flex-col justify-between gap-10">
                    {item}
                    <div className=" bg-primaryBlue h-[2px] w-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative text-white"
        style={{
          backgroundImage: "url(assets/img/abouts.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-[#000000ca] h-full w-full absolute top-0 left-0"></div>
        <div className="relative z-10 container py-20 flex flex-col gap-10">
          <h2
            className="text-4xl tracking-wide text-white font-extrabold"
            data-aos="fade-left"
          >
            HOW WE WORK
          </h2>

          <div className="border-1 border-white" data-aos="fade-right">
            {howweWork.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    index + 1 !== howweWork.length && "border-b"
                  } border-white flex`}
                >
                  <div className="py-10 w-[220px] justify-center items-center flex text-4xl border-r border-white">
                    <img src={item.icon} alt="icon" className="h-[80px]" />
                  </div>
                  <div className="p-10 flex flex-col gap-5">
                    <h3 className="text-xl font-bold text-primaryGreen">
                      {item.heading}
                    </h3>
                    <p className="font-light text-gray-200">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
