import Image from "next/image";

export default function DiacWF() {
  const images = [
    "/projects/diacwf/diacwf2.jpeg",
    "/projects/diacwf/diacwf4.jpeg",
    "/projects/diacwf/diacwf5.jpeg",
    "/projects/diacwf/diacwf7.jpeg",
    "/projects/diacwf/diacwf8.jpeg",
    "/projects/diacwf/diacwf9.jpeg",
    "/projects/diacwf/diacwf10.jpeg",
    "/projects/diacwf/diacwf13.jpeg",
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Aesthetic Water Feature Installation – Dubai International Academic City
        </h1>

        {/* SEO Optimized Description */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This project involved the design and construction of an aesthetic 
          water feature at Dubai International Academic City (DIAC), Dubai. 
          The objective was to enhance the visual identity of the space by 
          integrating a modern and elegant water element within the landscape.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          The scope of work included structural construction, waterproofing, 
          tiling, water circulation system installation, lighting integration, 
          and finishing works. The water feature was designed to create a 
          calming ambiance while complementing the surrounding hardscape and 
          softscape elements. Built with durable materials suitable for 
          Dubai’s climate, the installation ensures long-term performance 
          with minimal maintenance. This project reflects our expertise in 
          decorative water feature construction, landscape enhancement, and 
          commercial outdoor development in Dubai.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Aesthetic water feature installation at Dubai International Academic City - Image ${index + 1}`}
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