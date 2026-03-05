import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Landscape Maintenance at Palm Golden Mile Dubai | Petals Landscape",
  description:
    "Professional landscape maintenance services completed at Palm Golden Mile Dubai. Work included garden care, plant trimming, irrigation inspection, and maintaining outdoor green areas in the Palm Jumeirah community.",
};

export default function palmgolden() {
  const images = [
    "/projects/palmgolden/palmmile1.jpg",
    "/projects/palmgolden/palmmile2.jpg",
    "/projects/palmgolden/palmmile3.jpg",
    "/projects/palmgolden/palmmile4.jpg",
    "/projects/palmgolden/palmmile5.jpg",
    "/projects/palmgolden/palmmile6.jpg",
    "/projects/palmgolden/palmmile7.jpg",
    "/projects/palmgolden/palmmile8.jpg",
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Landscape Maintenance – Palm Golden Mile Dubai
        </h1>

        {/* SEO Description */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This project involved professional landscape maintenance services
          at Palm Golden Mile located in Palm Jumeirah, Dubai. The purpose of
          the project was to maintain the beauty and health of the landscape
          areas surrounding residential and commercial spaces while ensuring
          a clean, organized, and visually attractive outdoor environment.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          The scope of work included routine garden maintenance such as lawn
          care, plant trimming, irrigation system inspection, soil treatment,
          and overall landscape upkeep. Regular maintenance ensured healthy
          plant growth and preserved the aesthetic quality of the green
          spaces within the Palm Golden Mile community. This project
          demonstrates our expertise in landscape maintenance, garden care,
          and residential landscape management in Palm Jumeirah Dubai.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Landscape maintenance project at Palm Golden Mile Palm Jumeirah Dubai - Photo ${index + 1}`}
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