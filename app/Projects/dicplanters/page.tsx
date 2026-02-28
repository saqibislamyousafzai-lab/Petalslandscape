import Image from "next/image";

export default function DicPlanters() {
  const images = [
    "/projects/dicplanters/dicp-1.jpeg",
    "/projects/dicplanters/dicp-2.jpeg",
    "/projects/dicplanters/dicp-3.jpeg",
    "/projects/dicplanters/dicp-4.jpeg",
    "/projects/dicplanters/dicp-5.jpeg", // fixed path
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Water Feature Transformation to Planters & WPC Seating – Dubai Industrial City Head Office
        </h1>

        {/* SEO Optimized Content */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This project at Dubai Industrial City (DIC) Head Office involved 
          transforming the existing water features into modern landscape 
          planters with integrated seating areas. The objective was to create 
          a more functional, low-maintenance, and visually appealing outdoor 
          environment for staff and visitors.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          The scope of work included removal and redesign of old water 
          elements, installation of structured planting beds, and construction 
          of custom seating areas using high-quality WPC decking. The new 
          design enhances usability while maintaining durability under Dubai’s 
          climate conditions. Carefully selected plants were integrated to 
          provide greenery, shade, and a refreshed corporate landscape 
          appearance. This project highlights our expertise in landscape 
          renovation, WPC decking installation, planter design, and outdoor 
          space transformation in Dubai.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Planter and WPC decking seating installation at Dubai Industrial City Head Office - Image ${index + 1}`}
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