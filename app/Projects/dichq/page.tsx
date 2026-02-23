import Image from "next/image";

export default function dichq() {
  const images = [
    "/projects/dichq/dic-1.jpeg",
    "/projects/dichq/dic-2.jpeg",
    "/projects/dichq/dic-3.jpeg",
    "/projects/dichq/dic-4.jpeg",
    "/projects/dichq/dic-5.jpeg",
    "/projects/dichq/dic-6.jpeg",
    "/projects/dichq/dic-7.jpeg",
    "/projects/dichq/dic-8.jpeg",
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        <h1 className="bold-40 mb-6">Dubai Industrial City-Head Office</h1>

        <p className="regular-16 text-gray-30 mb-12 max-w-2xl">
          Landscaping and outdoor development project completed at DIC HQ,
          designed to enhance aesthetics and functionality of the space.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`DIC HQ ${index + 1}`}
              width={500}
              height={400}
              className="w-full h-60 object-cover rounded-xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
}