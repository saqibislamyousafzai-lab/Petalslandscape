import Image from "next/image";

export default function DicEntrance() {
  const images = [
    "/projects/dicentrance/dice-1.jpeg",
    "/projects/dicentrance/dice-2.jpeg",
    "/projects/dicentrance/dice-3.jpeg",
    "/projects/dicentrance/dice-4.jpeg",
    "/projects/dicentrance/dice-5.jpeg",
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Main Entrance Landscape Upgradation – Dubai Industrial City Head Office
        </h1>

        {/* SEO Optimized Content */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This project involved the upgradation of the main entrance landscape 
          at Dubai Industrial City (DIC) Head Office. The objective was to 
          enhance the first impression of the corporate facility through modern 
          landscape design, structured greenery, and architectural softscape elements.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          The scope of work included installation of decorative tree trellis 
          structures, plantation of new ornamental trees and shrubs, and 
          enhancement of planting beds to create a welcoming and premium 
          entrance experience. Carefully selected plant species suitable for 
          Dubai’s climate were integrated to ensure sustainability, low 
          maintenance, and long-term visual impact. This project highlights our 
          expertise in commercial landscape renovation, entrance design, and 
          softscape development in Dubai.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Main entrance landscape upgradation with tree trellis at Dubai Industrial City Head Office - Image ${index + 1}`}
              width={500}
              height={400}
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