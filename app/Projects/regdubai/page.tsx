import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "St Regis Palm Jumeirah Landscape Project Dubai | Petals Landscape UAE",
  description:
    "Petals Landscape completed a full landscape installation at St Regis Hotel Palm Jumeirah Dubai including planting, irrigation systems, outdoor pathways, and decorative landscape elements.",
};

export default function stregisdubai() {
  const images = [
    "/projects/Regisdubai/regdubai (1).jpg",
    "/projects/Regisdubai/regdubai (2).jpg",
    "/projects/Regisdubai/regdubai (3).jpg",
    "/projects/Regisdubai/regdubai (4).jpg",
    "/projects/Regisdubai/regdubai (5).jpg",
    "/projects/Regisdubai/regdubai (6).jpg",
    "/projects/Regisdubai/regdubai (7).jpg",
    "/projects/Regisdubai/regdubai (8).jpg",
  ];

  return (
    <section className="max-container padding-container py-10">

      <h1 className="text-3xl font-bold mb-6">
        St Regis Palm Jumeirah Landscape Project – Dubai
      </h1>

      <p className="mb-4 text-gray-700">
        Petals Landscape successfully completed the complete landscape
        installation project at the luxury St Regis Hotel located in Palm
        Jumeirah Dubai. The project included softscape and hardscape works
        designed to enhance the outdoor areas of the hotel and provide a
        premium environment for guests.
      </p>

      <p className="mb-6 text-gray-700">
        Our scope of work included plantation, irrigation system installation,
        decorative landscape elements, and pathway finishing. The landscaping
        was executed with high-quality materials and professional standards to
        complement the modern architecture of the hotel.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {images.map((img, index) => (
          <div key={index} className="relative w-full h-[350px]">
            <Image
              src={img}
              alt={`Landscape installation at St Regis Palm Jumeirah Dubai image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}

      </div>

    </section>
  );
}