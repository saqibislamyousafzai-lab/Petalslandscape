import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Villa Swimming Pool Construction & Landscape Work in Mohammed Bin Rashid City Dubai | Petals Landscape",
  description:
    "Luxury villa swimming pool construction and landscape development project completed in Mohammed Bin Rashid City Dubai. Work included pool construction, garden landscaping, plantation, and outdoor space development.",
};

export default function mbr() {
  const images = [
    "/projects/MBR/mbr (1).jpg",
    "/projects/MBR/mbr (2).jpg",
    "/projects/MBR/mbr (3).jpg",
    "/projects/MBR/mbr (4).jpg",
    "/projects/MBR/mbr (5).jpg",
    "/projects/MBR/mbr (6).jpg",
    "/projects/MBR/mbr (7).jpg",
    "/projects/MBR/mbr (8).jpg",
    "/projects/MBR/mbr (9).jpg",
    "/projects/MBR/mbr (10).jpg",
    "/projects/MBR/mbr (11).jpg",
    "/projects/MBR/mbr (12).jpg",
      "/projects/MBR/mbr (13).jpg",
        "/projects/MBR/mbr (14).jpg",
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Villa Swimming Pool Construction & Landscape Work – Mohammed Bin Rashid City Dubai
        </h1>

        {/* SEO Description */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This project involved the construction of a private villa swimming
          pool along with complete landscape development in Mohammed Bin
          Rashid City, Dubai. The aim of the project was to create a modern
          and relaxing outdoor environment that enhances the villa’s luxury
          lifestyle while providing functional outdoor living space for the
          residents.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          The scope of work included excavation, reinforced concrete
          swimming pool construction, waterproofing, and pool finishing.
          Alongside the pool construction, landscape works were carried out
          including soil preparation, plantation, and development of garden
          areas around the villa. High-quality materials and professional
          construction techniques were used to ensure durability and
          performance suitable for Dubai’s climate. This project highlights
          our expertise in villa swimming pool construction, residential
          landscaping, and luxury outdoor space development in Mohammed Bin
          Rashid City Dubai.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Villa swimming pool construction and landscape project in Mohammed Bin Rashid City Dubai - Photo ${index + 1}`}
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