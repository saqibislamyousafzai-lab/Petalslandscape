import Image from "next/image";

export default function VillaCR7() {
  const images = [
    "/projects/villacr7/cr71.jpeg",
    "/projects/villacr7/cr72.jpeg",
    "/projects/villacr7/cr73.jpeg",
    "/projects/villacr7/cr74.jpeg",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-container padding-container">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="bold-40 lg:text-6xl">
            Villa CR7
          </h1>

          <p className="regular-16 text-gray-500 mt-6 max-w-2xl mx-auto">
            A premium residential landscaping project designed to create
            a modern outdoor living experience with elegance and comfort.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={img}
                alt={`Villa CR7 ${index + 1}`}
                width={600}
                height={500}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition duration-500 font-semibold">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}