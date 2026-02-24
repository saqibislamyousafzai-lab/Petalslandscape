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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const project = projects[current];

  return (
    <section className="flexCenter flex-col overflow-hidden">

      {/* Heading Section */}
      <div className="padding-container max-container w-full pb-16">
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Our Recent Projects
        </p>

        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Landscape & Garden Projects Across Dubai
          </h2>

          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Our portfolio showcases premium landscape construction, garden 
            development, pergola installations, irrigation systems, and 
            outdoor enhancements delivered for residential communities, 
            commercial properties, and government entities across the UAE.
          </p>
        </div>
      </div>

      {/* Main Image Section */}
      <div className="flexCenter max-container relative w-full">

        <Image
          src={project.image}
          alt={`${project.company} landscaping project in Dubai`}
          width={1440}
          height={420}
          className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover rounded-3xl transition-all duration-700"
          priority
        />

        {/* Overlay Client Card */}
        <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 flex items-center gap-4 bg-white/95 backdrop-blur-md px-5 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-xl border transition-all duration-700">

          <Image
            src={project.logo}
            alt={`${project.company} logo`}
            width={50}
            height={50}
            className="object-contain rounded-full"
          />

          <div>
            <h3 className="bold-16 sm:bold-18">{project.company}</h3>
            <p className="text-xs sm:text-sm text-gray-500">
              {project.location}
            </p>
          </div>
        </div>
      </div>

      {/* Moving Client Logos Bar */}
      <div className="w-full mt-14 bg-gray-100/60 py-6 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee flex items-center gap-8 sm:gap-12 px-6">

          {[...projects, ...projects].map((item, index) => (
            <Image
              key={index}
              src={item.logo}
              alt={`${item.company} client logo`}
              width={100}
              height={50}
              className="object-contain opacity-70 hover:opacity-100 transition h-8 sm:h-10 lg:h-12 w-auto"
            />
          ))}

        </div>
      </div>

      {/* SEO Supporting Content */}
      <div className="max-container padding-container text-center mt-12">
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
          As a trusted landscaping company in Dubai, we specialize in custom 
          garden design, pergola installation, irrigation solutions, and 
          complete outdoor space development. Our team delivers durable, 
          aesthetically refined, and sustainable landscape projects tailored 
          to residential villas, commercial spaces, and large-scale communities 
          throughout the UAE.
        </p>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
};

export default Guide;