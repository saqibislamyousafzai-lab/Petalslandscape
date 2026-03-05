import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Villa Landscape Construction in Living Legends Dubai | Petals Landscape",
  description:
    "Villa landscape construction project completed in Living Legends Dubai including planter construction, plantation works, and outdoor seating installation to enhance the residential garden environment.",
};

export default function livleg() {
  const images = [
    "/projects/livleg/livleg (1).jpg",
        "/projects/livleg/livleg (2).jpg",
            "/projects/livleg/livleg (3).jpg",
                "/projects/livleg/livleg (4).jpg",
                    "/projects/livleg/livleg (5).jpg",
                        "/projects/livleg/livleg (6).jpg",
                            "/projects/livleg/livleg (7).jpg",
                                "/projects/livleg/livleg (8).jpg",
                                    "/projects/livleg/livleg (9).jpg",
  
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Villa Landscape Construction – Living Legends Dubai
        </h1>

        {/* SEO Description */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This project involved landscape construction for a private villa
          located in the Living Legends community in Dubai. The objective
          was to transform the outdoor space into a functional and visually
          attractive garden area that complements the villa’s residential
          environment while providing comfortable outdoor living space for
          the residents.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          The scope of work included the construction of landscape planters,
          plantation of selected plants and greenery, and the installation
          of custom outdoor seating areas within the garden. The planters
          were designed to organize the planting layout while enhancing the
          aesthetic structure of the landscape. Proper soil preparation and
          plantation techniques were used to ensure healthy plant growth
          suitable for Dubai’s climate conditions. This project highlights
          our expertise in villa landscape construction, planter
          construction, plantation works, and outdoor seating installation
          for residential gardens in Living Legends Dubai.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Villa landscape construction project in Living Legends Dubai with planters, plantation, and seating areas - Photo ${index + 1}`}
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