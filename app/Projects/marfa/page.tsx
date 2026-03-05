import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Landscape Maintenance at Souk Al Marfa Dubai | Petals Landscape",
  description:
    "Professional landscape maintenance services at Souk Al Marfa Dubai including plant care, irrigation inspection, garden upkeep, and maintaining green areas in a large commercial waterfront market environment.",
};

export default function marfa() {
  const images = [
    "/projects/marfa/marfa (1).jpg",
    "/projects/marfa/marfa (2).jpg",
    "/projects/marfa/marfa (3).jpg",
    "/projects/marfa/marfa (4).jpg",
    "/projects/marfa/marfa (5).jpg",
    "/projects/marfa/marfa (6).jpg",
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Landscape Maintenance – Souk Al Marfa Dubai
        </h1>

        {/* SEO Description */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This project involved professional landscape maintenance services
          at Souk Al Marfa located in Dubai. The objective of the work was
          to maintain the beauty, cleanliness, and health of the landscape
          areas surrounding the commercial market spaces while ensuring a
          pleasant outdoor environment for visitors and business owners.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          The scope of work included regular garden maintenance such as
          plant care, trimming, irrigation system inspection, soil
          treatment, and overall landscape upkeep. Our team ensured that
          the plants and greenery remained healthy and visually attractive
          despite the challenging climate conditions of Dubai. This
          project demonstrates our expertise in commercial landscape
          maintenance, garden care, and green space management in large
          public and commercial developments across Dubai.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Landscape maintenance project at Souk Al Marfa Dubai commercial market area - Photo ${index + 1}`}
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