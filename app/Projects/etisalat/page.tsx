import Image from "next/image";

export default function etisalat() {
  const images = [
    "/projects/Etisalatho/etislat (1).jpg",
    "/projects/Etisalatho/etislat (2).jpg",
    "/projects/Etisalatho/etislat (3).jpg",
    "/projects/Etisalatho/etislat (4).jpg",
    "/projects/Etisalatho/etislat (5).jpg",
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Landscape Maintenance Services – Etisalat Head Office Dubai
        </h1>

        {/* SEO Optimized Description */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This project involved landscape maintenance works at the 
          Etisalat Head Office in Dubai. The objective of the project 
          was to ensure that the outdoor landscape areas remain clean, 
          healthy, and visually appealing while maintaining the overall 
          professional appearance of the corporate environment.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          The scope of work included routine landscape maintenance 
          activities such as lawn care, plant maintenance, irrigation 
          system inspection, trimming, and general upkeep of the green 
          areas surrounding the facility. Proper maintenance practices 
          were implemented to ensure the landscape remains sustainable 
          and well-maintained despite Dubai’s challenging climate 
          conditions. This project highlights our expertise in commercial 
          landscape maintenance, corporate landscape management, and 
          professional landscaping services in Dubai.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Landscape maintenance project at Etisalat Head Office Dubai - Image ${index + 1}`}
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