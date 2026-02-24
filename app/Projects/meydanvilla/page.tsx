import Image from "next/image";

export default function meydanVilla() {
  const images = [
    "/projects/meydanvilla/med1.jpeg",
    "/projects/meydanvilla/med2.jpeg",
    "/projects/meydanvilla/med3.jpeg",
    "/projects/meydanvilla/med4.jpeg",
    "/projects/meydanvilla/med5.jpeg",
    "/projects/meydanvilla/med6.jpeg",
    "/projects/meydanvilla/med7.jpeg",
    "/projects/meydanvilla/med8.jpeg",
    "/projects/meydanvilla/med9.jpeg",
    
  ];

  return (
    <section className="py-20">
      <div className="max-container padding-container">
        <h1 className="bold-40 mb-6">Dubai Industrial City-Head Office-Main Entrance Design</h1>

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