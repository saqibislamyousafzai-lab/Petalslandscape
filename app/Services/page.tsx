import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Landscaping & Gardening Services in Dubai | Petals Landscape UAE",
  description:
    "Professional landscaping and gardening services in Dubai including villa landscaping, garden design, irrigation systems, pergola installation, outdoor lighting, hardscaping, and annual garden maintenance across the UAE.",
  keywords: [
    "landscaping services in Dubai",
    "garden maintenance Dubai",
    "villa landscaping UAE",
    "pergola installation Dubai",
    "irrigation system installation UAE",
    "outdoor lighting landscaping",
    "hardscaping company Dubai",
  ],
};

export default function ServicesPage(): JSX.Element {
  return (
    <main className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-hero-2 bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
              Landscaping & Gardening Services in Dubai
            </h1>
            <p className="mt-4 max-w-2xl text-lg mx-auto text-white/95 drop-shadow-md">
              Complete outdoor landscaping solutions including garden design,
              installation, irrigation systems, pergolas, and maintenance
              services across the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-14 tracking-tight">
          Professional Landscape & Garden Solutions
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "Landscape Design",
              description:
                "Custom landscape design services for villas and commercial properties including 3D planning, softscaping, and hardscaping solutions.",
              image: "/projects/meydanvilla/med8.jpeg",
              alt: "Luxury landscape design service in Dubai villa",
            },
            {
              title: "Garden Installation",
              description:
                "Complete garden installation including plants, lawns, pathways, and outdoor features designed for durability and elegance.",
              image: "/Hero04.jpeg",
              alt: "Professional garden installation in Dubai",
            },
            {
              title: "Irrigation Systems",
              description:
                "Smart irrigation system installation ensuring water efficiency, sustainability, and healthy plant growth.",
              image: "/Hero02.jpeg",
              alt: "Irrigation system installation for landscaping UAE",
            },
            {
              title: "Outdoor Lighting",
              description:
                "Elegant outdoor and landscape lighting solutions that enhance safety, beauty, and nighttime ambiance.",
              image: "/projects/dichq/dic-7.jpeg",
              alt: "Outdoor landscape lighting in Dubai garden",
            },
            {
              title: "Landscape Maintenance",
              description:
                "Annual garden maintenance contracts including lawn care, pruning, irrigation maintenance, and seasonal plant care.",
              image: "/projects/villacr7/cr73.jpeg",
              alt: "Garden maintenance services in Dubai UAE",
            },
            {
              title: "Hardscape & Pergolas",
              description:
                "Pergola installation, wooden decking, pathways, boundary walls, and bespoke outdoor construction solutions.",
              image: "/projects/dicpergola/dicp-3.jpeg",
              alt: "Pergola installation and hardscaping services Dubai",
            },
          ].map((service, index) => (
            <div
              key={service.title}
              className="group relative h-[400px] rounded-3xl overflow-hidden border border-green-700 shadow-lg"
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Strong Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />

              {/* Text Area with Blur Background */}
              <div className="absolute bottom-0 w-full backdrop-blur-sm bg-black/40 p-6">
                <h3 className="text-xl font-semibold text-white mb-3 drop-shadow-lg">
                  {service.title}
                </h3>
                <p className="text-sm text-white/95 leading-relaxed drop-shadow-md">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6 tracking-tight">
            Trusted Landscaping Company in Dubai
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Petals Landscape & Gardening is a leading landscaping company in
            Dubai providing high-end landscape design, villa garden
            construction, irrigation system installation, pergola building,
            outdoor lighting, and complete garden maintenance services across
            the UAE. We specialize in transforming outdoor areas into elegant,
            sustainable, and functional spaces that increase property value and
            enhance lifestyle.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Whether you require luxury villa landscaping, commercial outdoor
            development, or annual garden maintenance contracts, our team
            ensures quality craftsmanship, timely delivery, and long-lasting
            results tailored to Dubai’s climate conditions.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4 tracking-tight">
          Ready to Transform Your Outdoor Space?
        </h2>
        <p className="mb-6 max-w-xl mx-auto text-white/95">
          Contact our landscaping experts today for a customized garden design
          and outdoor solution in Dubai.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Get a Free Consultation
        </a>
      </section>

    </main>
  );
}