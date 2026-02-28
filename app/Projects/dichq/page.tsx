import Image from "next/image";

export default function Dichq() {
  const images = [
    "/projects/dichq/dic-1.jpeg",
    "/projects/dichq/dic-2.jpeg",
    "/projects/dichq/dic-3.jpeg",
    "/projects/dichq/dic-4.jpeg",
    "/projects/dichq/dic-5.jpeg",
    "/projects/dichq/dic-6.jpeg",
    "/projects/dichq/dic-7.jpeg",
      
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          PU Jogging Track Project – Dubai Industrial City Head Office
        </h1>

        {/* SEO Optimized Description */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This landscaping project at Dubai Industrial City (DIC) Head Office
          involved the design and installation of a high-performance PU jogging
          track. The project was developed to enhance outdoor functionality,
          promote employee wellness, and improve the overall aesthetic appeal
          of the corporate landscape.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          The polyurethane (PU) running track system was installed with proper
          sub-base preparation, edge detailing with granite finishes, and
          integrated outdoor lighting around the full track perimeter. The
          surface provides durability, slip resistance, shock absorption, and
          long-term performance under Dubai’s climate conditions. This project
          reflects our expertise in landscape construction, sports flooring
          solutions, and outdoor development works in Dubai.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`PU jogging track installation at Dubai Industrial City Head Office - Image ${index + 1}`}
              width={500}
              height={400}
              priority={index === 0}
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 50vw,
                     33vw"
              className="w-full h-60 object-cover rounded-xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
}