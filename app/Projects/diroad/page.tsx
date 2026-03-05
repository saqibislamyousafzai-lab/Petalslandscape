import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Road & Roundabout Landscape Maintenance in Dubai Industrial City | Petals Landscape",
  description:
    "Professional road and roundabout landscape maintenance project completed in Dubai Industrial City. Services include plant care, irrigation inspection, greenery maintenance, and public landscape upkeep along main roads and roundabouts.",
};

export default function damachills() {
  const images = [
    "/projects/diroad/diroad (1).jpg",
    "/projects/diroad/diroad (2).jpg",
    "/projects/diroad/diroad (3).jpg",
    "/projects/diroad/diroad (4).jpg",
    "/projects/diroad/diroad (5).jpg",
    "/projects/diroad/diroad (6).jpg",
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Road & Roundabout Landscape Maintenance – Dubai Industrial City Main Road
        </h1>

        {/* SEO Description */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This project involved landscape maintenance work along the main
          roads and roundabouts located in Dubai Industrial City. The purpose
          of the project was to maintain the greenery and landscape elements
          that enhance the visual appeal of the road corridors while ensuring
          a clean, organized, and sustainable outdoor environment for the
          surrounding industrial and commercial areas.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          The scope of work included routine landscape maintenance such as
          plant trimming, lawn care, irrigation system inspection, soil
          management, and general upkeep of planted areas along the road
          medians and roundabouts. Regular maintenance ensured that the
          landscape remained healthy, visually attractive, and suitable for
          Dubai’s climate conditions. This project highlights our expertise
          in road landscape maintenance, roundabout landscaping, and large
          scale public landscape management in Dubai Industrial City.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Road and roundabout landscape maintenance project in Dubai Industrial City main road - Photo ${index + 1}`}
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