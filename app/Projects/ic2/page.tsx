import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Landscape Maintenance & Water Feature Construction in International City Dubai | Petals Landscape",
  description:
    "Professional landscape maintenance and decorative water feature construction project completed in International City Dubai. Services include garden maintenance, irrigation inspection, plant care, and custom water feature installation.",
};

export default function damachills() {
  const images = [
    "/projects/ic2/ic (1).jpg",
     "/projects/ic2/ic (2).jpg",
      "/projects/ic2/ic (3).jpg",
       "/projects/ic2/ic (4).jpg",
        "/projects/ic2/ic (5).jpg",
         "/projects/ic2/ic (6).jpg",
   
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Landscape Maintenance & Water Feature Construction – International City Dubai
        </h1>

        {/* SEO Description */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This project involved professional landscape maintenance and the
          construction of a decorative water feature in a residential area
          located in International City, Dubai. The objective of the project
          was to improve the outdoor environment by maintaining the existing
          greenery while introducing a visually appealing water feature to
          enhance the aesthetic value of the landscape.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          The scope of work included routine garden maintenance such as lawn
          care, plant trimming, irrigation system inspection, and overall
          landscape upkeep to ensure healthy plant growth. In addition, a
          custom water feature was constructed to create a relaxing focal
          point within the garden area. Durable materials and efficient
          water circulation systems were used to ensure long-term
          performance and minimal maintenance requirements. This project
          highlights our expertise in landscape maintenance services,
          residential garden care, and water feature construction in
          International City Dubai.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Landscape maintenance and water feature construction project in International City Dubai - Photo ${index + 1}`}
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