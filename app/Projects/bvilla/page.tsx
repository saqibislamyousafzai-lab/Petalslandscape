import Image from "next/image";

export default function Bvilla() {
  const images = [
    "/projects/Bvilla/btvilla2.jpg",
        "/projects/Bvilla/btvilla1.jpg",
            "/projects/Bvilla/btvilla3.jpg",
                "/projects/Bvilla/btvilla.jpg",
                    "/projects/Bvilla/btvilla4.jpg",
                        "/projects/Bvilla/btvilla5.jpg",
                            "/projects/Bvilla/btvilla6.jpg",
                                "/projects/Bvilla/btvilla8.jpg",

  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Villa Landscape Enhancement & Interlock Installation – Boutique Villa Dubai
        </h1>

        {/* SEO Optimized Description */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This project involved landscape enhancement and hardscape works for a
          private residential villa located in Boutique villas, Dubai. The goal of the
          project was to upgrade the outdoor environment and create a more
          organized, functional, and visually appealing landscape space for the
          villa residents.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          The scope of work included interlock paving installation, hardscape
          improvements, and overall landscape enhancement of the outdoor areas.
          High-quality interlock materials suitable for Dubai’s climate were
          used to ensure durability, strength, and long-term performance. The
          newly installed paved surfaces improve accessibility, drainage, and
          usability of the outdoor spaces while complementing the architectural
          style of the villa. This project reflects our expertise in villa
          landscaping, interlock paving installation, and residential hardscape
          construction in Dubai.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Villa landscape enhancement and interlock paving installation project in Al Barsha Dubai - Image ${index + 1}`}
              width={600}
              height={450}
              priority={index === 0}
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