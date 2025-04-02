import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { GoDotFill } from "react-icons/go";

const images = [
  "ogun1",
  "ogun2",
  "ogun3",
  "ogun4",
  "ogun5",
  "ogun6",
  "ogun7",
  "ogun8",
  "ogun9",
  "ogun10",
];

const Media = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (activeIndex === images.length - 1) {
        setActiveIndex(0);
        return;
      }
      setActiveIndex((prev) => prev + 1);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [activeIndex]);
  return (
    <>
      <Hero image={"assets/img/mediahero.jpg"} text="Media" heading={"Media"} />

      <section className="container flex gap-40">
        <div className="w-full max-w-[60%]">
          <h1 className="uppercase text-4xl font-bold ">
            Concession: Ogun hands over specialist hospital to Afrilife’s
            VIEWPOINT
          </h1>
          <p className="text-gray-400 text-lg mt-4">November 16, 2024</p>

          <div className="mt-10">
            <img
              src={`assets/img/ogun/${images[activeIndex]}.jpg`}
              alt={images[activeIndex]}
            />
          </div>

          <div className="flex flex-col gap-3 mt-5">
            <p className="text-lg font-light">
              The Ogun State government has handed over its specialist hospital
              to Afrilife’s portfolio company, VIEWPOINT, following the signing
              of a 25-year concession agreement between both parties.
            </p>
            <p className="text-lg font-light">
              The handover ceremony, which took place on Thursday marked a
              significant milestone in advancing healthcare infrastructure in
              Ogun State.
            </p>
            <p className="text-lg font-light">
              The partnership is expected to transform the Ogun State Specialist
              Hospital into a leading institution, providing world-class medical
              care and services to communities across the state.
            </p>
            <p className="text-lg font-light">
              Patience Ugbaja, managing director, Afrilife Healthcare services,
              emphasised the company’s dedication to creating a facility that
              sets a standard for quality and accessible healthcare.
            </p>
            <p className="text-lg font-light">
              “This handover signifies not only a significant moment for
              AFRILIFE & VIEWPOINT but also for a fulfilled promise of the best
              healthcare delivery in Ogun State. Today represents an exciting
              new chapter in healthcare delivery for Ogun State.”
            </p>
            <div className="my-5">
              <iframe
                width="100%"
                height="415"
                src="https://www.youtube.com/embed/jDE_7prlKKQ?si=7yHGQoARZ9PSZybU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <p className="text-lg font-light">
              Also speaking, Eric Okoruwa, executive director, Pan African
              Capital Holdings, noted the significance of the project, stating
              that it aligns with PAC Holdings’ vision to invest in impactful
              initiatives that improve the quality of life across Africa.
            </p>
            <p className="text-lg font-light">
              “This partnership is a testament to Afrilife’s commitment to
              sustainable development and social impact. By harnessing our
              healthcare expertise and collaborating with reputable partners,
              through Viewpoint we are well-equipped to transform the Ogun State
              Specialist Hospital into a leading institution. This project
              aligns with PAC Holdings’ vision to invest in impactful
              initiatives that improve the quality of life across Africa.”
            </p>
            <p className="text-lg font-light">
              The event was attended by representatives from JEE Africa and
              Healthshare Health Solutions, who are key partners in the project,
              as well as other stakeholders in the healthcare and development
              sectors.
            </p>
            <p className="text-lg font-light">
              For more images and videos of the event please see the links
              below:
            </p>
          </div>
          <div className="flex gap-4 mt-5">
            <a
              className="underline text-blue-600"
              target="_blank"
              href="https://drive.google.com/drive/folders/1czTMVihgAYBtHB10Fqvq22WtrmgP2Vuo?usp=drive_link"
            >
              Images
            </a>
            <a
              className="underline text-blue-600"
              target="_blank"
              href="https://drive.google.com/drive/folders/1vj1VJDTTR9kM67yzx87e9qNMWC6npl9b?usp=sharing"
            >
              More Images
            </a>
            <a
              className="underline text-blue-600"
              target="_blank"
              href="https://businessday.ng/news/article/concession-ogun-hands-over-specialist-hospital-to-afrilifes-viewpoint/"
            >
              More News
            </a>
          </div>
        </div>
        <div className="w-full max-w-[380px]">
          <h2 className="text-3xl font-bold">Latest News</h2>

          <div className="flex gap-2 mt-10">
            <span>
              <GoDotFill />
            </span>
            <div className=" flex flex-col gap-2">
              <p className="flex items-center italic gap-1 text-sm text-primaryBlue">
                <span>November 16, 2024</span>
              </p>
              <p>
                {" "}
                Concession: Ogun hands over specialist hospital to Afrilife’s
                VIEWPOINT
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Media;
