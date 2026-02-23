"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const projects = [
  {
    image: "/projects/DIC pergola.jpeg",
    logo: "/clients/client DIC.png",
    company: "Dubai Industrial City",
    location: "Dubai ,UAE",
  },
  {
    image: "/projects/villanova.jpeg",
    logo: "/clients/client villanova.png",
    company: "Villa Nova, Dubai",
    location: "Dubai ,UAE",
  },
  {
    image: "/projects/DIAC.jpeg",
    logo: "/clients/DIAC Logo.jpg",
    company: "Dubai International Academic City",
    location: "Dubai ,UAE",
  },
];

const Guide = () => {
  const [current, setCurrent] = useState(0);

  // Auto change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const project = projects[current];

  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Our Recent Projects
        </p>

        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Designed for Our Clients
          </h2>

          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            We transform outdoor spaces into elegant landscapes tailored to
            each client’s vision.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flexCenter max-container relative w-full">
        {/* Background Image */}
        <Image
          src={project.image}
          alt={project.company}
          width={1440}
          height={500}
          className="w-full h-[500px] object-cover rounded-3xl transition-all duration-700"
          priority
        />

        {/* Overlay Card */}
        <div className="absolute bottom-8 left-8 flex items-center gap-4 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border transition-all duration-700">
          
          <Image
            src={project.logo}
            alt={`${project.company} logo`}
            width={60}
            height={60}
            className="object-contain rounded-full"
          />

          <div>
            <h3 className="bold-18">{project.company}</h3>
            <p className="regular-14 text-gray-500">
              {project.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;