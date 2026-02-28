import Image from "next/image";

export default function MeydanVilla() {
  const images = [
    "/projects/meydanvilla/med1.jpeg",
    "/projects/meydanvilla/med2.jpeg",
    "/projects/meydanvilla/med3.jpeg",
    "/projects/meydanvilla/med4.jpeg",
    "/projects/meydanvilla/med5.jpeg",
    "/projects/meydanvilla/med6.jpeg",
    "/projects/meydanvilla/med7.jpeg",
    "/projects/meydanvilla/med8.jpeg",
    "/projects/meydanvilla/med9.jpeg",
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Meydan Villa – Swimming Pool Construction & Landscape Design Dubai
        </h1>

        {/* SEO Optimized Description */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This residential villa project in Meydan, Dubai involved complete 
          landscape development, private swimming pool construction, and 
          integrated water feature installation. The project was designed to 
          create a luxurious outdoor living environment that complements the 
          villa’s modern architectural design.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          Our scope of work included swimming pool excavation, structural 
          construction, waterproofing, tiling, and finishing works, along 
          with surrounding hardscape and softscape development. The landscape 
          design incorporated premium paving, plantation areas, lawn 
          installation, and decorative water features to enhance the outdoor 
          ambiance. The result is a balanced combination of functionality, 
          aesthetics, and durability suitable for Dubai’s climate conditions. 
          This project highlights our expertise in villa landscaping, swimming 
          pool construction, and outdoor space design in Dubai.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Meydan villa swimming pool and landscape construction Dubai - Image ${index + 1}`}
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