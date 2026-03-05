import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Landscape Maintenance at Palm Club Vista Palm Jumeirah Dubai | Petals Landscape",
  description:
    "Professional landscape maintenance project completed at Palm Club Vista in Palm Jumeirah Dubai. Work included garden care, plant trimming, irrigation inspection, and maintaining green areas around the residential property.",
};

export default function pcv() {
  const images = [
    "/projects/pcv/pcv (1).jpg",
    "/projects/pcv/pcv (2).jpg",
    "/projects/pcv/pcv (3).jpg",
    "/projects/pcv/pcv (4).jpg",
    "/projects/pcv/pcv (5).jpg",
    "/projects/pcv/pcv (6).jpg",
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Landscape Maintenance – Palm Club Vista Palm Jumeirah Dubai
        </h1>

        {/* SEO Description */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This project involved professional landscape maintenance services
          at Palm Club Vista located in Palm Jumeirah, Dubai. The goal of
          the project was to maintain the beauty and health of the outdoor
          green areas while ensuring a clean, organized, and visually
          appealing environment for the residents.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          The scope of work included routine garden maintenance such as
          lawn care, plant trimming, irrigation system inspection, soil
          treatment, and general landscape upkeep. Regular maintenance
          ensured healthy plant growth and preserved the aesthetic quality
          of the landscaped areas surrounding the property. This project
          highlights our expertise in landscape maintenance, garden care,
          and residential landscape management in Palm Jumeirah Dubai.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Landscape maintenance project at Palm Club Vista Palm Jumeirah Dubai - Photo ${index + 1}`}
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