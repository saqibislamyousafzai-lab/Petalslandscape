import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Landscape Installation Project in Dubai Studio City Dubai | Petals Landscape UAE",
  description:
    "Professional landscape installation project completed in Dubai Studio City Dubai including plantation, irrigation systems, outdoor garden development, and complete landscape setup by Petals Landscape.",
};

export default function dsc() {
  const images = [
    "/projects/DSC/dsc (1).jpg",
    "/projects/DSC/dsc (2).jpg",
    "/projects/DSC/dsc (3).jpg",
    "/projects/DSC/dsc (4).jpg",
    "/projects/DSC/dsc (5).jpg",
    "/projects/DSC/dsc (6).jpg",
    "/projects/DSC/dsc (7).jpg",
    "/projects/DSC/dsc (8).jpg",
    "/projects/DSC/dsc (9).jpg",
  ];

  return (
    <section className="max-container padding-container py-10">

      <h1 className="text-3xl font-bold mb-6">
        Landscape Installation Project – Dubai Studio City
      </h1>

      <p className="mb-4 text-gray-700">
        Petals Landscape successfully completed a professional landscape
        installation project in Dubai Studio City Dubai. The objective of this
        project was to develop a modern and functional outdoor environment
        that enhances the visual appeal and usability of the surrounding
        spaces.
      </p>

      <p className="mb-6 text-gray-700">
        The project scope included softscape works, plantation, irrigation
        system installation, soil preparation, and landscape finishing. Our
        team ensured that all landscape elements were installed with high
        quality materials and proper techniques suitable for Dubai’s climate
        conditions. This project reflects our expertise in landscape
        installation, garden development, and professional landscaping
        services in Dubai Studio City.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {images.map((img, index) => (
          <div key={index} className="relative w-full h-[350px]">
            <Image
              src={img}
              alt={`Landscape installation project in Dubai Studio City Dubai - Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}

      </div>

    </section>
  );
}