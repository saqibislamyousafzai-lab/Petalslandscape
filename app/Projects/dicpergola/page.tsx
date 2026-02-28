import Image from "next/image";

export default function DicPergola() {
  const images = [
    "/projects/dicpergola/dicp-1.jpeg",
    "/projects/dicpergola/dicp-2.jpeg",
    "/projects/dicpergola/dicp-3.jpeg",
    "/projects/dicpergola/dicp-4.jpeg",
    "/projects/dicpergola/dicp-5.jpeg",
    "/projects/dicpergola/dicp-6.jpeg",
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Pergola Design & Installation – Dubai Industrial City Head Office
        </h1>

        {/* SEO Optimized Content */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This pergola design upgrade project at Dubai Industrial City (DIC) 
          Head Office focused on enhancing outdoor comfort, shade, and visual 
          appeal within the corporate landscape. The newly installed pergola 
          structure was designed to complement the existing architectural 
          elements while providing functional shaded seating areas for staff 
          and visitors.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          The pergola was constructed using high-quality, weather-resistant 
          materials suitable for Dubai’s climate conditions. The structure 
          improves outdoor usability, supports landscape aesthetics, and 
          contributes to a modern corporate outdoor environment. This project 
          reflects our expertise in pergola installation, landscape 
          construction, and outdoor architectural enhancements in Dubai.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Pergola installation at Dubai Industrial City Head Office - Image ${index + 1}`}
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