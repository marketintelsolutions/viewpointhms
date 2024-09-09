import React, { useState, useEffect, useRef } from "react";

const CountBox = ({ icon, end, children }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div
      ref={boxRef}
      className="bg-white p-6 rounded-lg shadow-md max-w-[400px] "
    >
      <div className="flex gap-4 items-center mb-4">
        <div className="text-3xl text-primaryGreen">{icon}</div>
        <span className="text-4xl font-bold text-primaryBlue">{count}</span>
      </div>
      {children}
      <a
        href="#"
        className="text-primaryGreen transition-all hover:text-primaryBlue mt-4 inline-block"
      >
        Find out more &raquo;
      </a>
    </div>
  );
};

const Counts = () => {
  return (
    <section id="counts" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex md:flex-row flex-col justify-center gap-8">
          <CountBox icon={<i className="fas fa-user-md"></i>} end={85}>
            <p className="text-sm">
              <strong className=" text-gray-700 mb-1">Doctors </strong>
              <span className="text-gray-600">
                They are pioneering care with unwavering expertise and
                compassion.
              </span>
            </p>
          </CountBox>

          <CountBox icon={<i className="far fa-hospital"></i>} end={41}>
            <p className="text-sm">
              <strong className=" text-gray-700 mb-1">Departments </strong>
              <span className="text-gray-600">
                Exemplary Hospital departments delivering excellence in every
                facet of patient care
              </span>
            </p>
          </CountBox>

          {/* <CountBox icon={<i className="fas fa-flask"></i>} end={14}>
            <p className="text-sm">
              <strong className=" text-gray-700 mb-1">Research Lab </strong>
              <span className="text-gray-600">
                Innovative research lab that advances our healthcare services
                through cutting-edge science and discovery.
              </span>
            </p>
          </CountBox> */}

          {/* <CountBox icon={<i className="fas fa-award"></i>} end={80}>
            <p className="text-sm">
              <strong className=" text-gray-700 mb-1">Awards </strong>
              <span className="text-gray-600">
                We have won multiple awards from several organizations
              </span>
            </p>
          </CountBox> */}
        </div>
      </div>
    </section>
  );
};

export default Counts;
