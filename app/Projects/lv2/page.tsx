import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Landscape Installation & Hardscape Works in Dubai Industrial City Labour Village 2 | Petals Landscape",
  description:
    "Landscape installation project completed at Labour Village 2 in Dubai Industrial City including interlock paving, pergola installation, outdoor seating areas, plantation, and complete landscape development.",
};

export default function lv2() {
  const images = [
    "/projects/DI_LV2/lv2 (1).jpg",
    "/projects/DI_LV2/lv2 (2).jpg",
    "/projects/DI_LV2/lv2 (3).jpg",
    "/projects/DI_LV2/lv2 (4).jpg",
    "/projects/DI_LV2/lv2 (5).jpg",
    "/projects/DI_LV2/lv2 (6).jpg",
    "/projects/DI_LV2/lv2 (7).jpg",
    "/projects/DI_LV2/lv2 (8).jpg",
    "/projects/DI_LV2/lv2 (9).jpg",
    "/projects/DI_LV2/lv2 (10).jpg",
    "/projects/DI_LV2/lv2 (11).jpg",
    "/projects/DI_LV2/lv2 (12).jpg",
    "/projects/DI_LV2/lv2 (13).jpg",
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Landscape Installation & Hardscape Development – Dubai Industrial City Labour Village 2
        </h1>

        {/* SEO Description */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This project involved landscape installation and outdoor space
          development at Labour Village 2 located in Dubai Industrial City.
          The goal of the project was to create comfortable and functional
          outdoor areas for residents by integrating greenery, walkways,
          shaded seating zones, and well-designed landscape elements.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          The scope of work included complete landscape installation,
          plantation works, and various hardscape elements such as
          interlock paving pathways, pergola structures, and outdoor
          seating installations. The interlock paving provided durable
          and accessible walkways while pergolas created shaded areas
          for relaxation and gathering spaces. Carefully selected plants
          and landscape layouts were installed to enhance the overall
          environment and improve the outdoor living experience within
          the community. This project demonstrates our expertise in
          landscape installation, hardscape construction, pergola
          installation, and outdoor seating development in Dubai
          Industrial City.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Landscape installation and hardscape works at Labour Village 2 Dubai Industrial City including interlock paving, pergola, and seating areas - Photo ${index + 1}`}
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