import Image from "next/image";
import React from "react";

const services = [
  {
    image: "/services/landscape design.jpeg",
    title: "Landscape Design",
    description:
      "Creative and functional outdoor designs tailored to your space.",
  },
  {
    image: "/services/installation.jpeg",
    title: "Installation",
    description:
      "Professional planting, paving, lighting, and full garden setup.",
  },
  {
    image: "/services/maintain.jpeg",
    title: "Maintenance",
    description:
      "Regular care to keep your landscape fresh and beautiful.",
  },
  {
    image: "/services/irrigation.jpg",
    title: "Irrigation Systems",
    description:
      "Smart watering solutions for healthy and efficient landscapes.",
  },
  {
    image: "/services/hardscape design.jpeg",
    title: "Hardscaping",
    description:
      "Patios, walkways, retaining walls, and elegant stone features.",
  },
  {
    image: "/services/lawn design.jpeg",
    title: "Lawn Development",
    description:
      "Premium grass installation and lawn improvement services.",
  },
];

const Features = () => {
  return (
    <section className="flexCenter flex-col py-24">
      <div className="max-container padding-container w-full">
        <div className="text-center mb-16">
          <h2 className="bold-40 lg:bold-64">Our Services</h2>
          <p className="regular-16 text-gray-30 mt-4 max-w-2xl mx-auto">
            We offer complete landscaping solutions designed to enhance beauty,
            comfort, and long-term value for your outdoor spaces.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-white"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="bold-20 mb-3">{service.title}</h3>
                <p className="regular-14 text-gray-30">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;