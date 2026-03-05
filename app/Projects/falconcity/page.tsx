import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Villa Swimming Pool Construction in Falcon City Dubai | Petals Landscape",
  description:
    "Professional villa swimming pool construction project completed in Falcon City Dubai. Work included pool excavation, reinforced concrete structure, waterproofing, finishing, and installation of pool systems.",
};

export default function falconcity() {
  const images = [
    "/projects/FalconCity/fc (1).jpg",
    "/projects/FalconCity/fc (2).jpg",
    "/projects/FalconCity/fc (3).jpg",
    "/projects/FalconCity/fc (4).jpg",
    "/projects/FalconCity/fc (5).jpg",
    "/projects/FalconCity/fc (6).jpg",
    "/projects/FalconCity/fc (7).jpg",
    "/projects/FalconCity/fc (8).jpg",
    "/projects/FalconCity/fc (9).jpg",
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Villa Swimming Pool Construction – Falcon City Dubai
        </h1>

        {/* SEO Description */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This project involved the construction of a private villa
          swimming pool in Falcon City, Dubai. The objective of the
          project was to create a high-quality swimming pool that
          enhances the outdoor living experience while adding value
          and luxury to the residential property.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          The scope of work included excavation, reinforced concrete
          swimming pool construction, waterproofing, and pool finishing.
          Advanced construction techniques and durable materials were
          used to ensure structural strength and long-term performance
          suitable for Dubai’s climate conditions. This project
          demonstrates our expertise in villa swimming pool construction
          and residential outdoor development in Falcon City Dubai.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Villa swimming pool construction project in Falcon City Dubai - Photo ${index + 1}`}
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