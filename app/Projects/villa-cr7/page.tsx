import Image from "next/image";

export default function VillaCR7() {
  const images = [
    "/projects/villacr7/cr71.jpeg",
    "/projects/villacr7/cr72.jpeg",
    "/projects/villacr7/cr73.jpeg",
    "/projects/villacr7/cr74.jpeg",
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Villa CR7 – Indoor & Outdoor Plant Maintenance | Jumeirah Bay Dubai
        </h1>

        {/* SEO Optimized Description */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This premium residential project at Villa CR7 in Jumeirah Bay 
          involves comprehensive indoor and outdoor plant maintenance 
          services. The objective is to preserve the elegance and natural 
          beauty of the villa’s landscape while maintaining a healthy and 
          vibrant green environment.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          Our scope of work includes maintenance of small and premium indoor 
          decorative plants, outdoor ornamental shrubs, and landscaped garden 
          areas. Services include scheduled watering, pruning, fertilization, 
          pest control treatment, soil improvement, plant replacement planning, 
          and seasonal care. Special attention is given to maintaining luxury 
          plant arrangements that complement the villa’s modern architectural 
          style. This project reflects our expertise in high-end villa landscape 
          maintenance and plant care services in Dubai, particularly in 
          exclusive communities like Jumeirah Bay.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Indoor and outdoor plant maintenance at Villa CR7 Jumeirah Bay Dubai - Image ${index + 1}`}
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