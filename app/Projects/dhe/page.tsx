import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Villa Swimming Pool Construction & Landscape Work in Dubai Hills Estate | Petals Landscape",
  description:
    "Luxury villa swimming pool construction and landscape development project completed in Dubai Hills Estate. Work included pool construction, garden landscaping, plantation, and outdoor space development.",
};

export default function dhe() {
  const images = [
    "/projects/dhe/dhe (1).jpg",
    "/projects/dhe/dhe (2).jpg",
    "/projects/dhe/dhe (3).jpg",
    "/projects/dhe/dhe (4).jpg",
    "/projects/dhe/dhe (5).jpg",
    "/projects/dhe/dhe (6).jpg",
    "/projects/dhe/dhe (7).jpg",
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Villa Swimming Pool Construction & Landscape Work – Dubai Hills Estate
        </h1>

        {/* SEO Description */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This project involved the construction of a private villa swimming
          pool along with landscape development at Dubai Hills Estate. The
          objective of the project was to create a modern outdoor environment
          that enhances the luxury residential lifestyle while providing a
          relaxing and functional garden space for the villa residents.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          The scope of work included excavation, reinforced concrete
          swimming pool construction, waterproofing, and finishing works.
          In addition to the swimming pool construction, landscape works
          were carried out including soil preparation, plantation, and
          development of garden areas around the villa. High-quality
          materials and professional construction techniques were used to
          ensure durability and long-term performance suitable for Dubai’s
          climate conditions. This project highlights our expertise in
          villa swimming pool construction, residential landscaping, and
          luxury outdoor space development in Dubai Hills Estate.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Villa swimming pool construction and landscape project in Dubai Hills Estate Dubai - Photo ${index + 1}`}
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