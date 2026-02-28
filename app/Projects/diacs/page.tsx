import Image from "next/image";

export default function Diacs() {
  const images = [
    "/projects/diacs/diacs1.jpeg",
    "/projects/diacs/diacs2.jpeg",
    "/projects/diacs/diacs3.jpeg",
    "/projects/diacs/diacs4.jpeg",
    "/projects/diacs/diacs5.jpeg",
    "/projects/diacs/diacs6.jpeg",
    "/projects/diacs/diacs7.jpeg",
    "/projects/diacs/diacs8.jpeg",
    "/projects/diacs/diacs9.jpeg",
    "/projects/diacs/diacs10.jpeg",
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        
        {/* Main Heading */}
        <h1 className="bold-40 mb-6">
          Entrance Area Upgradation with Seating & Shaded Structure – Dubai International Academic City
        </h1>

        {/* SEO Optimized Description */}
        <p className="regular-16 text-gray-30 mb-6 max-w-3xl">
          This project involved the upgradation of the entrance area at Dubai 
          International Academic City (DIAC), focusing on improving outdoor 
          usability, comfort, and aesthetic appeal. The objective was to 
          transform the entrance into a welcoming and functional gathering space.
        </p>

        <p className="regular-16 text-gray-30 mb-12 max-w-3xl">
          The scope of work included construction of modern seating areas, 
          installation of shaded structures for weather protection, and 
          integration with the surrounding landscape elements. Durable 
          materials suitable for Dubai’s climate were used to ensure 
          long-term performance and minimal maintenance. The upgraded 
          entrance enhances user comfort while strengthening the visual 
          identity of the facility. This project demonstrates our expertise 
          in commercial landscape renovation, shaded structure installation, 
          and outdoor seating area construction in Dubai.
        </p>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Entrance upgradation with seating and shaded area at Dubai International Academic City - Image ${index + 1}`}
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