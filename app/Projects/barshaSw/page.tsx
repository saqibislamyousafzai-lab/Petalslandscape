import Image from "next/image";

export default function barshaSw() {
  const images = [
    "/projects/barshavilla/br1.jpg",
 "/projects/barshavilla/br2.jpg",
  "/projects/barshavilla/br3.jpg",
   "/projects/barshavilla/br4.jpg",
    "/projects/barshavilla/br5.jpg",    
     "/projects/barshavilla/br6.jpg",
      "/projects/barshavilla/br7.jpg",
       "/projects/barshavilla/br8.jpg",
    
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Villa Swimming Pool Construction – Al Barsha Dubai
        </h1>

        {/* SEO Optimized Description */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This project involved the construction of a modern residential 
          swimming pool for a private villa located in Al Barsha, Dubai. 
          The objective was to create a visually appealing and functional 
          outdoor leisure space that enhances the lifestyle and property 
          value of the villa.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          Our scope of work included excavation, reinforced concrete pool 
          structure construction, waterproofing, pool finishing, and 
          installation of filtration and circulation systems. High-quality 
          materials suitable for Dubai’s climate were used to ensure 
          durability, safety, and long-term performance. The project was 
          designed to seamlessly integrate the swimming pool with the 
          surrounding landscape, creating a relaxing outdoor environment 
          for the villa residents. This project highlights our expertise 
          in villa swimming pool construction, residential pool design, 
          and luxury outdoor space development in Dubai.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Villa swimming pool construction project in Al Barsha Dubai - Image ${index + 1}`}
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