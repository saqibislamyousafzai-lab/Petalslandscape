import Image from "next/image";

export default function damachills() {
  const images = [
    "/projects/DamacHills/dh (1).jpg",
    "/projects/DamacHills/dh (2).jpg",
    "/projects/DamacHills/dh (3).jpg",
    "/projects/DamacHills/dh (4).jpg",
    "/projects/DamacHills/dh (5).jpg",
    "/projects/DamacHills/dh (6).jpg",
    "/projects/DamacHills/dh (7).jpg",
    "/projects/DamacHills/dh (8).jpg",
    "/projects/DamacHills/dh (9).jpg",
    "/projects/DamacHills/dh (10).jpg",
    "/projects/DamacHills/dh (11).jpg",
    "/projects/DamacHills/dh (12).jpg",
    "/projects/DamacHills/dh (13).jpg",
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Villa Swimming Pool & Landscape Construction – Damac Hills Dubai
        </h1>

        {/* SEO Optimized Description */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This project involved the construction of a private residential 
          swimming pool along with complete landscape development for a 
          luxury villa located in Damac Hills, Dubai. The goal of the project 
          was to transform the outdoor space into a functional and visually 
          attractive environment that complements the villa’s modern 
          architecture and provides a relaxing outdoor lifestyle for the residents.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          The scope of work included excavation, reinforced concrete swimming 
          pool structure construction, waterproofing, pool finishing, and 
          installation of filtration and circulation systems. In addition to 
          the swimming pool works, landscape construction was carried out to 
          enhance the surrounding outdoor areas, creating a balanced and 
          aesthetically pleasing environment. High-quality construction 
          materials suitable for Dubai’s climate were used to ensure durability, 
          safety, and long-term performance. This project demonstrates our 
          expertise in villa swimming pool construction, residential landscape 
          development, and luxury outdoor space creation in Damac Hills Dubai.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Villa swimming pool and landscape construction project in Damac Hills Dubai - Image ${index + 1}`}
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