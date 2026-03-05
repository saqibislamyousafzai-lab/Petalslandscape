import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Indoor Plant Installation & Maintenance at Souk Al Marfa 3 Dubai | Petals Landscape",
  description:
    "Professional indoor plant installation and maintenance services completed at Souk Al Marfa 3 Dubai including interior greenery setup, decorative plants, and ongoing plant care for commercial spaces.",
};

export default function marfa3() {
  const images = [
    "/projects/Marfa3/marfa3 (1).jpg",
    "/projects/Marfa3/marfa3 (2).jpg",
    "/projects/Marfa3/marfa3 (3).jpg",
    "/projects/Marfa3/marfa3 (4).jpg",
    "/projects/Marfa3/marfa3 (5).jpg",
    "/projects/Marfa3/marfa3 (6).jpg",
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Indoor Plant Installation & Maintenance – Souk Al Marfa 3 Dubai
        </h1>

        {/* SEO Description */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This project involved indoor plant installation and ongoing
          plant maintenance services at Souk Al Marfa 3 in Dubai. The
          objective was to introduce natural greenery into indoor
          commercial spaces to create a refreshing environment for
          visitors, shop owners, and staff within the marketplace.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          Our team installed a variety of decorative indoor plants
          suitable for interior conditions, carefully selecting plant
          species that thrive in controlled indoor environments.
          In addition to the installation, regular maintenance services
          were provided including watering, pruning, cleaning, and plant
          health monitoring to ensure the greenery remains vibrant and
          visually appealing. This project highlights our expertise in
          indoor landscaping, commercial plant installation, and
          professional plant maintenance services in Dubai.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Indoor plant installation and maintenance project at Souk Al Marfa 3 Dubai commercial space - Photo ${index + 1}`}
              width={600}
              height={450}
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
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